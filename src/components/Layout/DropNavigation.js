import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import classes from "./DropNavigation.module.css";
import NavBar from "./NavBar";
const DropNavigation = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/aboutus"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/famousquote"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Famous Quote
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contactus"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Contact Us
          </NavLink>
        </li>
        <div className={classes.mainNavigationButtons}>
          <NavLink to='register'>
            <button>SIGN IN</button>
          </NavLink>
          <NavLink to='register'>
            <button>SIGN UP</button>
          </NavLink>
        </div>
      </ul>
    </nav>
  );
};

export default DropNavigation;
