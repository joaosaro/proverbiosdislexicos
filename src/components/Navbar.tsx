import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

export const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper cyan darken-1 px1">
      <NavLink to="/" className="brand-logo">
        Redux + TypeScript
      </NavLink>
      <ul className="right hide-on-med-and-down">
        <li cy-data="home-nav-link">
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
