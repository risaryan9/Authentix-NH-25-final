import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const TicketBooking = () => {
  const [userUUID, setUserUUID] = useState(null);

  useEffect(() => {
    // Fetch user data on page load
    axios.get('http://localhost:3000/api/user', { withCredentials: true })
      .then(res => {
        setUserUUID(res.data.user?.uuid);
      });
  }, []);

  const handleBookTicket = async () => {
    const ticketUUID = uuidv4();

    try {
      await axios.post('http://localhost:3000/api/book', {
        user_uuid: userUUID,
        ticket_uuid: ticketUUID
      });
      alert("Ticket booked and QR code generated!");
    } catch (err) {
      console.error(err);
      alert("Failed to book ticket.");
    }
  };

  return (
    <button onClick={handleBookTicket}>
      Book Ticket
    </button>
  );
};

export default TicketBooking;
