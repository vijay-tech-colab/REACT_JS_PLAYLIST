import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">My App</h1>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Welcome</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
