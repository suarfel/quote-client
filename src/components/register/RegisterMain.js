import classes from "./RegisterMain.module.css";
import login from "../../images/login.png";
import { NavLink } from "react-router-dom";
import SignWithGoogle from "./SignWithGoogle";
import RegisterForm from "./RegisterForm";
import { useSelector } from "react-redux";
import { Register } from "../../api/authApi";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useHttp from "../../hooks/userHttp";
import LoadingSpinner from "../UI/LoadingSpinner";
import LandingMain from "../landing/LandingMain";

const RegisterMain = () => {
  const { sendRequest, status, error } = useHttp(Register);

  const navigate = useNavigate();
  useEffect(() => {
    if (status === "completed" && error === null) {
      navigate("/login");
    }
    if (status === "completed" && error !== null) {
      navigate("/home");
    }
  });

  const registerUserHandler = (user) => {
    sendRequest(user);
  };

  return (
    <div className={classes.registerMainTop}>
      <div className={classes.registerMain}>
        <div className={classes.registerMainBody}>
          <div className={classes.registerTitle}>Create Your Account</div>
          <div className={classes.registerWithGoogle}>
            <SignWithGoogle />
          </div>
          <div className={classes.registerForm}>
            <RegisterForm onRegisterUser={registerUserHandler} />
          </div>
          <div className={classes.haveAccount}>
            Already have an accout? <NavLink to="/login">Login</NavLink>
          </div>
          {status === "pending" && <LoadingSpinner />}
        </div>
        <div className={classes.registerMainLeft}>
          <img src={login} />
        </div>
      </div>
      <LandingMain />
    </div>
  );
};

export default RegisterMain;
