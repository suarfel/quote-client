import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import Footer from "./Footer";
import Layout from "./Layout";
import classes from "./Main.module.css";
import DropNavigation from "./DropNavigation";
import { navActions } from "../../store/home";
import NavProfile from "./NavProfile";
const Main = (props) => {
  const width = useSelector((state) => state.nav.width);

  const isDrawing = useSelector((state) => state.nav.isHamTouched);
  const isLoading = useSelector((state) => state.nav.isLoading);
  const dispatch = useDispatch();
  const setDimenson = () => {
    dispatch(navActions.setWindow());
  };
  useEffect(() => {
    window.addEventListener("resize", setDimenson);
  }, [width]);

  return (
    <div className={classes.mainConfigure}>
      <div className={classes.mainLayoutNavigation}>
        <Layout />
      </div>
      <div className={classes.dropMain}>
        {isDrawing && width < 640 && <DropNavigation />}
      </div>
      {isLoading && (
        <div className={classes.dropLogout}>
          <NavProfile />
        </div>
      )}

      <div className={classes.mainPosition}>
        <div className={classes.minPos}>{props.children}</div>
        <div className={classes.mainFooter}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Main;
