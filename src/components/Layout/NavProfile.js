import { NavLink } from "react-router-dom";
import classes from "./NavProfile.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";
import { navActions } from "../../store/home";

const NavProfile = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(authActions.logOut());
    dispatch(navActions.changeLoading());
  };
  return (
    <div className={classes.navProfile}>
      <div
        className={classes.navProfileProfile}
        onClick={() => {
          dispatch(navActions.changeLoading());
        }}
      >
        <NavLink to="/user">Profile</NavLink>
      </div>
      <div
        className={classes.navProfileSetting}
        onClick={() => {
          dispatch(navActions.changeLoading());
        }}
      >
        <NavLink to="/user">Settings</NavLink>{" "}
      </div>
      <span className={classes.navProfileBorder}></span>
      <div className={classes.navProfileLogout} onClick={onLogout}>
        <NavLink to="/login">Logout</NavLink>
      </div>
    </div>
  );
};

export default NavProfile;
