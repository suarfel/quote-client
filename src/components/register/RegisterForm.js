import { useSelector } from "react-redux";
import UserForm from "../../hooks/userInput";
import classes from "./RegisterForm.module.css";
import { useState } from "react";

const RegisterForm = () => {
  const width = useSelector((state) => state.nav.width);
  const {
    enteredValue: enteredName,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: nameReset,
    enteredValueIsValid: nameIsValid,
    hasError: nameError,
  } = UserForm(
    (enteredValue) =>
      15 > enteredValue.trim().length && enteredValue.trim().length > 0
  );

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
  if (nameIsValid && emailIsValid && passwordIsValid) {
    isFormValid = true;
  }

  const registerUser = (event) => {
    event.preventDefault();
    console.log(isFormValid);
    if (isFormValid) {
      console.log(enteredName);
      console.log(enteredEmail);
      console.log(enteredPassword);
    }
  };
  return (
    <div className={classes.registerFormMain}>
      <form onSubmit={registerUser}>
        <div className={nameError ? classes.invalidControl : classes.control}>
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            id="name"
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            autoComplete="given-name"
          />
          {nameError && (
            <div className={classes.formError}>Name too short or long</div>
          )}
        </div>
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
            type="text"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          />
          {passwordError && (
            <div className={classes.formError}>
              Please add valid password
            </div>
          )}
        </div>
        <div className={classes.signupUser}>
          <button>SIGN UP</button>
        </div> 
      </form>
    </div>
  );
};
export default RegisterForm;
