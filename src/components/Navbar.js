import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <Link to="/" className="logo">Math Magician</Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/quotes">Quotes</Link>
        </li>
      </ul>

    </nav>
  );
}
