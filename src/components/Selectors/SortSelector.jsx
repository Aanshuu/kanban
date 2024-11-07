import React from "react";
import "./Selectors.css";

const SortSelector = ({ sortOptions, setSortOption }) => {
  return (
    <select value={sortOptions} onChange={(e) => setSortOption(e.target.value)} className="selector">
      <option value="priority">Priority</option>
      <option value="title">Title</option>
    </select>
  );
};

export default SortSelector;