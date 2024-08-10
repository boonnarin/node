import React from 'react';
import { FaTachometerAlt, FaTable, FaInfoCircle } from 'react-icons/fa';
import '../styles/Sidebar.css';

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <ul className="sidebar-links">
        <li><FaTachometerAlt /> <span>Dashboard</span></li>
        <li><FaTable /> <span>Table</span></li>
        <li><FaInfoCircle /> <span>About</span></li>
      </ul>
      <button className="logout-btn">Logout</button>
    </aside>
  );
};

export default Sidebar;
