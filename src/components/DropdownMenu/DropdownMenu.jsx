import React, { useState } from "react";
import GroupSelector from "../Selectors/GroupSelector";
import SortSelector from "../Selectors/SortSelector";
import Display from "../../assets/Display.svg";
import "./DropdownMenu.css";

const DropdownMenu = ({ groupBy, setGroupBy, sortOption, setSortOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    const content = document.querySelector('.content');
    if (isOpen) {
      content.classList.remove('shifted');
    } else {
      content.classList.add('shifted');
    }
  };

  return (
    <div className="dropdown-menu">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        <img src={Display} alt="Display" className="display-icon" />
        Display
      </button>
      <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
        <div className="dropdown-item">
          <label>Grouping:</label>
          <GroupSelector groupBy={groupBy} setGroupBy={setGroupBy} />
        </div>
        <div className="dropdown-item">
          <label>Ordering:</label>
          <SortSelector sortOptions={sortOption} setSortOption={setSortOption} />
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;