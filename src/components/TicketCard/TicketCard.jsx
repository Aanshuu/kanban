import React from "react";
import "./TicketCard.css";

const TicketCard = ({ ticket, users, groupBy }) => {
  const user = users.find((user) => user.id === ticket.userId);
  const userName = user ? user.name : "Unknown User";

  const getPriorityLabel = (priority) => {
    switch (priority) {
      case 1:
        return "Low";
      case 2:
        return "Medium";
      case 3:
        return "High";
      case 4:
        return "Urgent";
      default:
        return "No Priority";
    }
  };

  return (
    <div className="ticket-card">
      <h5>{ticket.id}</h5>
      <h4>{ticket.title}</h4>
      {groupBy !== "priority" && <p>Priority: {getPriorityLabel(ticket.priority)}</p>}
      {groupBy !== "status" && <p>Status: {ticket.status}</p>}
      {groupBy !== "user" && <p>User: {userName}</p>}
      <p>{ticket.tag}</p>
    </div>
  );
};

export default TicketCard;