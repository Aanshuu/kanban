import React from "react";
import "./TicketCard.css";

const TicketCard = ({ ticket }) => {
  return (
    <div className="ticket-card">
      <h4>{ticket.title}</h4>
      <p>Priority: {ticket.priority}</p>
      <p>Status: {ticket.status}</p>
      <p>{ticket.tag}</p>
    </div>
  );
};

export default TicketCard;