import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="p-2 navbar d-flex justify-content-between navbar-light">
      <Link to="/math-magicians/" className="title-math text-black text-decoration-none">Math Magicians</Link>
      <div className="menu-items">
        <Link to="/math-magicians/" className="links text-decoration-none">Home</Link>
        <Link to="/math-magicians/Calculator" className="links text-decoration-none">Calculator</Link>
        <Link to="/math-magicians/Quote" className="links text-decoration-none">Quote</Link>
      </div>
    </nav>
  );
}
export default Navbar;
