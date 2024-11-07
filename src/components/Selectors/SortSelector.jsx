import React from "react";
import "./selectors.css";

const SortSelector = ({ setSortOption }) => {
  return (
    <select onChange={(e) => setSortOption(e.target.value)} className="selector">
      <option value="priority">Priority</option>
      <option value="title">Title</option>
    </select>
  );
};

export default SortSelector;