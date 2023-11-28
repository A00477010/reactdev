import React from "react";
// import './App.css';

// import {Link} from 'react-router-dom';
import { Link } from "react-router-dom";
export const Navbar1 = () => {
  return (
    <nav className="navbar">
      <Link to={"/about-me"} className="navLink">
        About me 
      </Link>
      <Link to={"/My-town"} className="navLink">
        My Town
      </Link>
    </nav>
  );
};
