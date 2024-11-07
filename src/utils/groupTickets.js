const groupTickets = (tickets, groupBy) => {
    return tickets.reduce((groups, ticket) => {
      const key = ticket[groupBy] || "No Group";
      if (!groups[key]){
        groups[key] = [];
      } 
      groups[key].push(ticket);
      return groups;
    }, {});
  };
  
export default groupTickets;
