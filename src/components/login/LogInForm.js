import { useDispatch, useSelector } from "react-redux";
import classes from "../register/RegisterForm.module.css";
import UserForm from "../../hooks/userInput";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../store/auth";
import { navActions } from "../../store/home";
import LoadingSpinner from "../UI/LoadingSpinner";

const url = "http://localhost:5181/api/auth/login";

const LogInForm = () => {
  const isLoading = useSelector((state) => state.nav.isLoading);
  const navigate = useNavigate();

  const dispatch = useDispatch();
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
        13 > enteredValue.trim().length && enteredValue.trim().length > 5
    );

    let isFormValid = false;
    if (emailIsValid && passwordIsValid) {
      isFormValid = true;
    }

    const registerUser = async (event) => {
      event.preventDefault();
      if (isFormValid) {
        dispatch(navActions.changeLoading());

        await fetch(url, {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              res.json().then((data) => {
                let errorMessage = "Athentication Failed";
                if (data && data.error && data.error.errorMessage) {
                  errorMessage = data.error.message;
                }
                alert(errorMessage);
              });
            }
          })
          .then((data) => {
            dispatch(navActions.changeLoading());
            dispatch(authActions.logIn(data.value.token));
            navigate("/user");
          })
          .catch((err) => {
            alert(err.message);
          });
      }

      emailReset();
      passwordReset();
    };
    return (
      <div className={classes.registerFormMain}>
        <form onSubmit={registerUser}>
          {isLoading && <LoadingSpinner />}
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
