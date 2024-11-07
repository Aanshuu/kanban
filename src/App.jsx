import React, { useState, useEffect } from "react";
import KanbanBoard from "./components/KanbanBoard/KanbanBoard";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu";
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
      <DropdownMenu
        groupBy={groupBy}
        setGroupBy={setGroupBy}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <div className="content">
        <KanbanBoard
          tickets={tickets}
          groupBy={groupBy}
          sortOption={sortOption}
          users={users}
        />
      </div>
    </div>
  );
};

export default App;