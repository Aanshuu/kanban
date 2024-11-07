const sortTickets = (tickets, sortOption) => {
    return tickets.sort((a, b) => {
      if (sortOption === "priority") return b.priority - a.priority;
      if (sortOption === "title") return a.title.localeCompare(b.title);
      return 0;
    });
  };
  
  export default sortTickets;