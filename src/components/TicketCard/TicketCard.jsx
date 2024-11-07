import React from "react";
import "./TicketCard.css";

const TicketCard = ({ ticket, users }) => {
  const user = users.find((user) => user.id === ticket.userId);
  const userName = user ? user.name : "Unknown User";
  return (
    <div className="ticket-card">
      <h4>{ticket.title}</h4>
      <p>Priority: {ticket.priority}</p>
      <p>Status: {ticket.status}</p>
      <p>User: {userName}</p>
      <p>{ticket.tag}</p>
    </div>
  );
};

export default TicketCard;