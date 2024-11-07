import React from "react";
import TicketCard from "../TicketCard/TicketCard";
import groupTickets from "../../utils/groupTickets";
import sortTickets from "../../utils/sortTickets";
import "./KanbanBoard.css";
import dot_menu from "../../assets/dot_menu.svg";
import add from "../../assets/add.svg";
import no_priority from "../../assets/no_priority.svg";
import low_priority from "../../assets/low_priority.svg";
import medium_priority from "../../assets/medium_priority.svg";
import high_priority from "../../assets/high_priority.svg";
import urgent_priority from "../../assets/priority_colored.svg";
import todo from "../../assets/todo.svg";
import in_progress from "../../assets/in_progress.svg";
import Backlog from "../../assets/Backlog.svg";

const KanbanBoard = ({ tickets, groupBy, sortOption, users }) => {
  const groupedTickets = groupTickets(
    sortTickets(tickets, sortOption),
    groupBy,
    users
  );

  // got a bit messy for adding image in the header didn't plan out before
  const getPriorityLabel = (priority) => {
    switch (priority) {
      case 1:
        return (
          <>
            <img src={low_priority} alt="Low Priority" className="priority-icon" />
            Low
          </>
        );
      case 2:
        return (
          <>
            <img src={medium_priority} alt="Medium Priority" className="priority-icon" />
            Medium
          </>
        );
      case 3:
        return (
          <>
            <img src={high_priority} alt="High Priority" className="priority-icon" />
            High
          </>
        );
      case 4:
        return (
          <>
            <img src={urgent_priority} alt="Urgent Priority" className="priority-icon" />
            Urgent
          </>
        );
      default:
        return (
          <>
            <img src={no_priority} alt="No Priority" className="priority-icon" />
            No Priority
          </>
        );
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case "Todo":
        return (
          <>
            <img src={todo} alt="To Do" className="status-icon" />
            To Do
          </>
        );
      case "In progress":
        return (
          <>
            <img src={in_progress} alt="In Progress" className="status-icon" />
            In Progress
          </>
        );
      case "Backlog":
        return (
          <>
            <img src={Backlog} alt="Backlog" className="status-icon" />
            Backlog
          </>
        );
      default:
        return status;
    }
  };

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map((group) => (
        <div key={group} className="kanban-column">
          <div className="kanban-column-header">
            <h3>
              {groupBy === "priority"
                ? getPriorityLabel(Number(group))
                : groupBy === "status"
                ? getStatusLabel(group)
                : group}
            </h3>
            <div>
              <img src={add} alt="Add" className="column-header-icon" />
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