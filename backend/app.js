import express from 'express';
import session from 'express-session';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import mongoose from 'mongoose';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';
import User from './models/User.js'; // add .js if you're using ESM
import { generateUserQr, generateTicketQr } from './qr-creation.js';
import bodyParser from 'body-parser';
import Razorpay from "razorpay"



const MONGO_URI = 'mongodb://localhost:27017/users'; 

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


//Express App declared
const app = express();

//BodyParser middleware to recieve and respond to requests
app.use(bodyParser.json()); 

//Cors to sahre information between backend and the frontend
app.use(cors({
  origin: 'http://localhost:8080',
  credentials: true
}));

// Replace with your actual credentials
const GOOGLE_CLIENT_ID = '182660338567-oqg412tp4g9mae4d2dd2j90voocv3sag.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

// Session middleware
app.use(session({ secret: 'your_secret', resave: false, saveUninitialized: true }));


  
// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());


//Returns the user details and the user QR
app.get('/api/user', (req, res) => {
    
  if(req.user){
    generateUserQr(req.user.uuid)
    const uuid = req.user.uuid
    console.log(uuid)
  }

  res.json({ user: req.user || null });
});


// Serialize user into the session
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((obj, done) => {
  done(null, obj);
});

// Configure Google OAuth strategy
passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/callback'
}, async (accessToken, refreshToken, profile, done) => {
  try {
    // Check if user exists
    let user = await User.findOne({ googleId: profile.id });

    if (!user) {
      // If not, create new user
      user = await User.create({
        googleId: profile.id,
        email: profile.emails[0].value,
        displayName: profile.displayName,
        photo: profile.photos[0].value,
        uuid: uuidv4(), // generate custom UUID
      });
    }

    return done(null, user); // store in session
  } catch (err) {
    return done(err, null);
  }
}));


//Starts the oAuth 2.0 process
app.post('/api/book', async (req, res) => {
  // Ensure user is authenticated
  if (!req.isAuthenticated || !req.isAuthenticated()) {
    return res.status(401).json({ error: 'Unauthorized: User not logged in' });
  }

  const user_uuid = req.user?.uuid;

  if (!user_uuid) {
    return res.status(400).json({ error: 'Missing user UUID' });
  }

  // Generate a ticket UUID
  const ticket_uuid = crypto.randomUUID(); // Always generate on backend

  // Payload defind to genearte the dynamic QR from the Blockchain
  const payload = { user_uuid, ticket_uuid };

  try {
    const qrDataUrl = await generateTicketQr(JSON.stringify(payload));
    res.status(200).json({ qrDataUrl, user_uuid, ticket_uuid }); // optionally return uuids
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to generate QR code' });
  }
});


app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Callback function over successfull or failure of OAuth process
app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    // Successful login
    res.redirect('/profile');
  }
);

app.get('/profile', (req, res) => {
  if (!req.isAuthenticated()) return res.redirect('/');
  res.redirect("http://localhost:8080/")
});

// Function for logging out 
app.get('/logout', (req, res, next) => {
  req.logout(function(err) {
    if (err) { return next(err); }


    req.session.destroy(() => {
      res.clearCookie('connect.sid');
      res.redirect('http://localhost:8080'); 
    });
  });
});


const razorpayInstance = new Razorpay({
  key_id: "rzp_test_3tpQ9zF45v8yE9",
  key_secret: "C0FVo3Stz0xrAnZalAeF4Ll9",
});

app.post("/create-order", async (req, res) => {
  const { amount } = req.body;

  const options = {
    amount: amount * 100, // in paise
    currency: "INR",
    receipt: "receipt_" + Date.now(),
  };

  try {
    const order = await razorpayInstance.orders.create(options);
    res.json(order);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log("Server started on http://localhost:${PORT}"));