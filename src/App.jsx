import React, { useState, useEffect } from "react";
import KanbanBoard from "./components/KanbanBoard/KanbanBoard";
import GroupSelector from "./components/Selectors/GroupSelector";
import SortSelector from "./components/Selectors/SortSelector";
import useFetchData from "./hooks/useFetchData";
import "./App.css";

const App = () => {
  const [groupBy, setGroupBy] = useState("status");
  const [sortOption, setSortOption] = useState("priority");
  const { tickets, users, loading, error } = useFetchData();

  useEffect(() => {
    const savedGroupBy = localStorage.getItem("groupBy") || "status";
    const savedSortOption = localStorage.getItem("sortOption") || "priority";
    setGroupBy(savedGroupBy);
    setSortOption(savedSortOption);
  }, []);

  useEffect(() => {
    localStorage.setItem("groupBy", groupBy);
    localStorage.setItem("sortOption", sortOption);
  }, [groupBy, sortOption]);

  if (loading) {
    return <div className="App">...Loading</div>;
  }
  if (error) {
    return <div className="App">Error: {error.message}</div>;
  }
  return (
    <div className="App">
      <GroupSelector setGroupBy={setGroupBy} />
      <SortSelector setSortOption={setSortOption} />
      <KanbanBoard
        tickets={tickets}
        groupBy={groupBy}
        sortOption={sortOption}
        users={users}
      />
    </div>
  );
};

export default App;