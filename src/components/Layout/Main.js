import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import Footer from "./Footer";
import Layout from "./Layout";
import classes from "./Main.module.css";
import DropNavigation from "./DropNavigation";
import { navActions } from "../../store/home";
const Main = (props) => {
  const width = useSelector((state) => state.nav.width);

  const isDrawing = useSelector((state) => state.nav.isHamTouched);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
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
