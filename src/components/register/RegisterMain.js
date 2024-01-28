import classes from "./RegisterMain.module.css";
import login from "../../images/login.png";
import { NavLink } from "react-router-dom";
import SignWithGoogle from "./SignWithGoogle";
import RegisterForm from "./RegisterForm";
import { useSelector } from "react-redux";
import { Register } from "../../api/authApi";
import {useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import useHttp from "../../hooks/userHttp";

const RegisterMain = () => {
  const { sendRequest,status } = useHttp(Register);
  const navigate = useNavigate();
  useEffect(() => {
    if (status === "completed") {
      navigate("/login");
    }
  });

  const registerUserHandler = (user) => {
    sendRequest(user);
   };

  const width = useSelector((state) => state.nav.width);
  return (
    <div className={classes.registerMain}>
      <div className={classes.registerMainBody}>
        <div className={classes.registerTitle}>Create Your Account</div>
        <div className={classes.registerWithGoogle}>
          <SignWithGoogle />
        </div>
        <div className={classes.registerForm}>
          <RegisterForm
            isLoading={status === "pending"}
            onRegisterUser={registerUserHandler}
          />
        </div>
        <div className={classes.haveAccount}>
          Already have an accout? <NavLink to="/login">Login</NavLink>
        </div>
      </div>
      <div className={classes.registerImage}>
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
  );
};

export default RegisterMain;
