import React from "react";
import "./selectors.css";

const GroupSelector = ({ groupBy, setGroupBy }) => {
  const handleChange = (e) => {
    setGroupBy(e.target.value);
  };

  return (
    <select value={groupBy} onChange={handleChange} className="selector">
      <option value="status">Status</option>
      <option value="user">User</option>
      <option value="priority">Priority</option>
    </select>
  );
};

export default GroupSelector;