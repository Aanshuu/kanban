import React from "react";
import "./TicketCard.css";
import no_priority from "../../assets/no_priority.svg";
import low_priority from "../../assets/low_priority.svg";
import medium_priority from "../../assets/medium_priority.svg";
import high_priority from "../../assets/high_priority.svg";
import urgent_priority from "../../assets/priority_colored.svg";
import todo from "../../assets/todo.svg";
import in_progress from "../../assets/in_progress.svg";
import Backlog from "../../assets/Backlog.svg";

const TicketCard = ({ ticket, users, groupBy }) => {
  const user = users.find((user) => user.id === ticket.userId);
  const userName = user ? user.name : "Unknown User";

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 1:
        return <img src={low_priority} alt="Low Priority" className="priority-icon" />;
      case 2:
        return <img src={medium_priority} alt="Medium Priority" className="priority-icon" />;
      case 3:
        return <img src={high_priority} alt="High Priority" className="priority-icon" />;
      case 4:
        return <img src={urgent_priority} alt="Urgent Priority" className="priority-icon" />;
      default:
        return <img src={no_priority} alt="No Priority" className="priority-icon" />;
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Todo":
        return <img src={todo} alt="To Do" className="status-icon" />;
      case "In progress":
        return <img src={in_progress} alt="In Progress" className="status-icon" />;
      case "Backlog":
        return <img src={Backlog} alt="Backlog" className="status-icon" />;
      default:
        return status;
    }
  };

  return (
    <div className="ticket-card">
      <h5>{ticket.id}</h5>
      <h4>{ticket.title}</h4>
      {groupBy !== "priority" && <p>Priority: {getPriorityIcon(ticket.priority)}</p>}
      {groupBy !== "status" && <p>Status: {getStatusIcon(ticket.status)}</p>}
      {groupBy !== "user" && <p>Assigned: {userName}</p>}
      <div className="tag-container">
        <span className="tag-box">
          <span className="tag-circle"></span>
          {ticket.tag}
        </span>
      </div>
    </div>
  );
};

export default TicketCard;