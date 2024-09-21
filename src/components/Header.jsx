import React, { useState } from 'react';
import { display, down } from '../assets';
import '../App.css';

const Header = ({ onGroupChange, onSortChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className="header">
      <div className="menu">
        <div className="dropdown">
          <button className="dropbtn" onClick={toggleDropdown}>
            <img src={display} alt="display-icon" className="display-icon" />
            <span>
              Display
            </span>
            <img src={down} alt="down-icon" className="display-icon2" />
          </button>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <div className="dropdown-item">
                <div className='di-label'>
                  <label>Grouping:</label>
                </div>
                <div className='di-select'>
                  <select onChange={(e) => onGroupChange(e.target.value)}>
                    <option value="status">By Status</option>
                    <option value="user">By User</option>
                    <option value="priority">By Priority</option>
                  </select>
                </div>
              </div>
              <div className="dropdown-item">
                <div className='di-label'>
                  <label>Ordering:</label>
                </div>
                <div className='di-select'>
                  <select onChange={(e) => onSortChange(e.target.value)}>
                    <option value="priority">By Priority</option>
                    <option value="title">By Title</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
