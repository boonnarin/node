import React from 'react';
import { FaBars } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          <FaBars />
        </button>
        <div className="navbar-links">
          <ul>
            <li>Starter</li>
            <li>About</li>
            <li>Menu</li>
          </ul>
        </div>
        <div className="navbar-user">
          <img src="/path-to-user-avatar.png" alt="User Avatar" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
