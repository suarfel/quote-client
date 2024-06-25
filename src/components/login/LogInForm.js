import { useDispatch, useSelector } from "react-redux";
import classes from "../register/RegisterForm.module.css";
import UserForm from "../../hooks/userInput";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../store/auth";
import { navActions } from "../../store/home";
import LoadingSpinner from "../UI/LoadingSpinner";
import useHttp from "../../hooks/userHttp";
import { Login } from "../../api/authApi";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { userActions } from "../../store/user";

const LogInForm = () => {
  console.log("login form is not working");
  const regex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~])/;

  const { sendRequest, status, error, data } = useHttp(Login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "completed" && error === null && data) {
      dispatch(authActions.logIn(data.value.token));
      const decodeToken = jwtDecode(data.value.token);
      dispatch(userActions.setUsername(decodeToken.sid));
      dispatch(userActions.setUserId(decodeToken.sub));
      dispatch(userActions.setEmail(decodeToken.email));
      navigate(`/user/${decodeToken.email}`);
    }
  });

  {
    const {
      enteredValue: enteredEmail,
      valueChangeHandler: emailChangeHandler,
      valueBlurHandler: emailBlurHandler,
      reset: emailReset,
      enteredValueIsValid: emailIsValid,
      hasError: emailError,
    } = UserForm((enteredValue) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enteredValue.trim())
    );

    const {
      enteredValue: enteredPassword,
      valueChangeHandler: passwordChangeHandler,
      valueBlurHandler: passwordBlurHandler,
      reset: passwordReset,
      enteredValueIsValid: passwordIsValid,
      hasError: passwordError,
    } = UserForm(
      (enteredValue) =>
        13 > enteredValue.trim().length &&
        enteredValue.trim().length > 5 &&
        regex.test(enteredValue.trim())
    );

    let isFormValid = false;
    if (emailIsValid && passwordIsValid) {
      isFormValid = true;
    }

    const loginUser = async (event) => {
      event.preventDefault();
      if (isFormValid) {
        sendRequest({
          email: enteredEmail,
          password: enteredPassword,
        });
      }

      emailReset();
      passwordReset();
    };
    return (
      <div className={classes.registerFormMain}>
        <form onSubmit={loginUser}>
          {status === "pending" && <LoadingSpinner />}
          <div
            className={emailError ? classes.invalidControl : classes.control}
          >
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="text"
              id="email"
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              autoComplete="email"
            />
            {emailError && (
              <div className={classes.formError}>
                Please enter a valid email
              </div>
            )}
          </div>
          <div
            className={passwordError ? classes.invalidControl : classes.control}
          >
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              id="password"
              value={enteredPassword}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
            />
            {passwordError && (
              <div className={classes.formError}>Please add valid password</div>
            )}
          </div>
          <div className={classes.signupUser}>
            <button disabled={!isFormValid}>SIGN IN</button>
          </div>
        </form>
      </div>
    );
  }
};

export default LogInForm;
