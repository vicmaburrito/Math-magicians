import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="p-2 navbar d-flex justify-content-between navbar-light">
      <h1 className="navbar-brand">Math Magicians</h1>
      <div className="menu-items">
        <Link to="/math-magicians/Calculator">Calculator</Link>
      </div>
    </nav>
  );
}
export default Navbar;
