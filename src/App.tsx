
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

import Explore from "./pages/explore";
import BlogDetail from "./pages/BlogDetail";
import References from "./pages/about";
import Booking from "./pages/contact";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/login";
import Payment from "./pages/payments";
import TransactionComplete from "./pages/TransactionComplete";
import Profile from "./pages/Profile";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Index />} />
            
            <Route path="/explore" element={<Explore />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/references" element={<References />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/payments" element={<Payment />} />
            <Route path="/login" element={<Login />} />
            <Route path="/TransactionComplete" element={<TransactionComplete />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;