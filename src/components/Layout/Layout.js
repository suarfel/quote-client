import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
import NavBar from "./NavBar";
import { navActions } from "../../store/home";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import DropNavigation from "./DropNavigation";
import Logo from "./Logo";
import Footer from "./Footer";
import ProfileStatus from "./ProfileStatus";

const Layout = () => {
  const width = useSelector((state) => state.nav.width);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const isDrawing = useSelector((state) => state.nav.isHamTouched);

  const setDimenson = () => {
    dispatch(navActions.setWindow());
  };
  useEffect(() => {
    window.addEventListener("resize", setDimenson);
  }, [width]);

  return (
    <div className={classes.Layout}>
      {width >= 640 && <MainNavigation />}
      {width < 640 && (
        <div className={classes.layoutHam}>
          <Logo />
          {!isLoggedIn && <NavBar />}
          {isLoggedIn && <ProfileStatus />}
        </div>
      )}
    </div>
  );
};
export default Layout;
