import { NavLink } from "react-router-dom";
import classes from "./LogInMain.module.css";
import login from "../../images/login.png";
import LogInForm from "./LogInForm";
import { useSelector } from "react-redux";
import LandingDescription from "../landing/LandingDescription";
import LandingMain from "../landing/LandingMain";

const LogInMain = () => {
  const width = useSelector((state) => state.nav.width);
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
          {width > 500 && <img src={login} style={{ width: "30rem" }} />}
          {width <= 420 && width > 340 && (
            <img src={login} style={{ width: "20rem" }} />
          )}
          {width <= 500 && width > 420 && (
            <img src={login} style={{ width: "25rem" }} />
          )}
          {width <= 340 && <img src={login} style={{ width: "17rem" }} />}
        </div>
      </div>
      <LandingMain />
    </div>
  );
};

export default LogInMain;
