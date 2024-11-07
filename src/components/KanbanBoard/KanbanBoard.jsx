import React from "react";
import TicketCard from "../TicketCard/TicketCard";
import groupTickets from "../../utils/groupTickets";
import sortTickets from "../../utils/sortTickets";
import "./KanbanBoard.css";

const KanbanBoard = ({ tickets, groupBy, sortOption, users }) => {
  const groupedTickets = groupTickets(sortTickets(tickets, sortOption), groupBy, users);

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map((group) => (
        <div key={group} className="kanban-column">
          <h3>{group}</h3>
          {groupedTickets[group].map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} users={users} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;