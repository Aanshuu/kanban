import React from "react";
import "./selectors.css";

const GroupSelector = ({ setGroupBy }) => {
  return (
    <select onChange={(e) => setGroupBy(e.target.value)} className="selector">
      <option value="status">Status</option>
      <option value="user">User</option>
      <option value="priority">Priority</option>
    </select>
  );
};

export default GroupSelector;