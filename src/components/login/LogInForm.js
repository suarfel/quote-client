import { useSelector } from "react-redux";
import classes from  "../register/RegisterForm.module.css";
import UserForm from "../../hooks/userInput";

const LogInForm = () => {
    {
        const width = useSelector((state) => state.nav.width);
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
        if ( emailIsValid && passwordIsValid) {
          isFormValid = true;
        }
      
        const registerUser = (event) => {
          event.preventDefault();
          console.log(isFormValid);
          if (isFormValid) {
            console.log(enteredEmail);
            console.log(enteredPassword);
          }
        };
        return (
          <div className={classes.registerFormMain}>
            <form onSubmit={registerUser}>
              <div className={emailError ? classes.invalidControl : classes.control}>
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
                  <div className={classes.formError}>Please enter a valid email</div>
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
                <button>SIGN IN</button>
              </div>
            </form>
          </div>
        );
      };
};

export default LogInForm;
