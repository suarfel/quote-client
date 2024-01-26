import classes from "./MainNavigation.module.css";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import Logo from "./Logo";
import AuthButtons from "./AuthButtons";
  const MainNavigation = () => {

  return (
    <div className={classes.mainNavigation}>
      <Logo />
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
        </ul>
      </nav>
      <AuthButtons />
    </div>
  );
};

export default MainNavigation;
