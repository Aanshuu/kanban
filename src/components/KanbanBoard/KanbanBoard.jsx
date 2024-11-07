import React from "react";
import TicketCard from "../TicketCard/TicketCard";
import groupTickets from "../../utils/groupTickets";
import sortTickets from "../../utils/sortTickets";
import "./KanbanBoard.css";
import dot_menu from "../../assets/dot_menu.svg";
import add from "../../assets/add.svg";

const KanbanBoard = ({ tickets, groupBy, sortOption, users }) => {
  const groupedTickets = groupTickets(
    sortTickets(tickets, sortOption),
    groupBy,
    users
  );
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
    <div className="kanban-board">
      {Object.keys(groupedTickets).map((group) => (
        <div key={group} className="kanban-column">
          <div className="kanban-column-header">
            <h3>
              {groupBy === "priority" ? getPriorityLabel(Number(group)) : group}
            </h3>
            <div>
              <img src={add} alt="Menu" className="column-header-icon" />
              <img src={dot_menu} alt="Menu" className="column-header-icon" />
            </div>
          </div>
          {groupedTickets[group].map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              users={users}
              groupBy={groupBy}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
