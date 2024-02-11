import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import classes from "./DropNavigation.module.css";
import NavBar from "./NavBar";
import { useDispatch } from "react-redux";
import { navActions } from "../../store/home";
const DropNavigation = () => {
  const dispatch = useDispatch();
  const onHamTouched = () => {
    dispatch(navActions.changeNav());
  };
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            onClick={onHamTouched}
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
            onClick={onHamTouched}
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
            onClick={onHamTouched}
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
            onClick={onHamTouched}
          >
            Contact Us
          </NavLink>
        </li>
        <div className={classes.mainNavigationButtons}>
          <NavLink to="login" onClick={onHamTouched}>
            <button>SIGN IN</button>
          </NavLink>
          <NavLink to="register" onClick={onHamTouched}>
            <button>SIGN UP</button>
          </NavLink>
        </div>
      </ul>
    </nav>
  );
};

export default DropNavigation;
