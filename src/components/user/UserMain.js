import UserLeft from "./UserLeft";
import classes from "./UserMain.module.css";
import UserMiddle from "./UserMiddle";
import UserRight from "./UserRight";
import { useSelector } from "react-redux/es/hooks/useSelector";
const UserMain = () => {

  
  const width = useSelector((state) => state.nav.width);
  return (
    <div className={classes.userMain}>
      <div className={classes.userMainLeft}>
        <UserLeft />
        {width > 700 && <UserRight/> }
      </div>
      <div className={classes.userMainRight}>
        {width <= 700 && <UserRight/> }
        <UserMiddle />
      </div>
    </div>
  );
};

export default UserMain;
