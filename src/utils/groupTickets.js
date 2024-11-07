const groupTickets = (tickets, groupBy, users) => {
  return tickets.reduce((groups, ticket) => {
    let key;
    if (groupBy === "user") {
      const user = users.find((user) => user.id === ticket.userId);
      key = user ? user.name : "No User";
    } else {
      key = ticket[groupBy] || "No Group";
    }
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(ticket);
    return groups;
  }, {});
};

export default groupTickets;