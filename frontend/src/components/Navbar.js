import React from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';

function Navbar(props) {

  
    return (
      <div className="navbar">
        <Link className="NavLink" to='/'>Home</Link>
        <Link className="NavLink" to='/Projects'>Projects</Link>
        <Link className="NavLink" to='/About'>About Me</Link>
        <Link className="NavLink" to='/Blog'>Blog</Link>
        <Link className="NavLink" to='/Contact'>Contact</Link>
      </div>
    );
  }
  
  export default Navbar;