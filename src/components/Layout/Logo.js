import classes from "./Logo.module.css";
import { Icon } from "@iconify/react";
import { navActions } from "../../store/home";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
const Logo = () => {
  return (
    <div className={classes.mainNavigationLogo}>
      <div className={classes.mainName}>Quote</div>
    </div>
  );
};

export default Logo;
