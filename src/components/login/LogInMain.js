import { NavLink } from "react-router-dom";
import classes from "./LogInMain.module.css";
import login from "../../images/login.png";
import LogInForm from "./LogInForm";
import { useSelector } from "react-redux";
import LandingDescription from "../landing/LandingDescription";
import LandingMain from "../landing/LandingMain";

const LogInMain = () => {
  return (
    <div className={classes.logInMainTop}>
      <div className={classes.logInMain}>
        <div className={classes.logInMainRight}>
          <div className={classes.logInMainTitle}>LogIn to Your Account</div>
          <div className={classes.logInMainForm}>
            <LogInForm />
          </div>
          <div className={classes.dontHaveAccount}>
            Don't have an account? <NavLink to="/register">Register</NavLink>
          </div>
        </div>
        <div className={classes.logInMainLeft}>
          <img src={login} />
        </div>
      </div>
      <LandingMain />
    </div>
  );
};

export default LogInMain;
