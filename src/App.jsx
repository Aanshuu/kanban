import React, { useState, useEffect } from "react";
import KanbanBoard from "./components/KanbanBoard/KanbanBoard";
import GroupSelector from "./components/Selectors/GroupSelector";
import SortSelector from "./components/Selectors/SortSelector";
import useFetchData from "./hooks/useFetchData";
import { saveToLocalStorage, loadFromLocalStorage } from "./utils/localStorage";
import "./App.css";

const App = () => {
  const [groupBy, setGroupBy] = useState(loadFromLocalStorage("groupBy", "status"));
  const [sortOption, setSortOption] = useState(loadFromLocalStorage("sortOption", "priority"));
  const { tickets, users, loading, error } = useFetchData();

  useEffect(() => {
    saveToLocalStorage("groupBy", groupBy);
    saveToLocalStorage("sortOption", sortOption);
  }, [groupBy, sortOption]);

  if (loading) {
    return <div className="App">...Loading</div>;
  }
  if (error) {
    return <div className="App">Error: {error.message}</div>;
  }
  return (
    <div className="App">
      <GroupSelector groupBy={groupBy} setGroupBy={setGroupBy} />
      <SortSelector sortOptions={sortOption} setSortOption={setSortOption} />
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