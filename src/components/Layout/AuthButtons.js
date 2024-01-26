import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
const AuthButtons = () => {
  return (
    <div className={classes.mainNavigationButtons}>
      <NavLink to="login">
        <button>SIGN IN</button>
      </NavLink>
      <NavLink to="register">
        <button>SIGN UP</button>
      </NavLink>
    </div>
  );
};
export default AuthButtons;
