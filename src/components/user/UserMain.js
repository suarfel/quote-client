import UserLeft from "./UserLeft";
import classes from "./UserMain.module.css";
import UserMiddle from "./UserMiddle";
import UserRight from "./UserRight";

const UserMain = () => {
  return (
    <div className={classes.userMain}>
      <div className={classes.userMainLeft}>
        <UserLeft />
        <div className={classes.userMainLeftRight}>
          <UserRight />
        </div>
      </div>
      <div className={classes.userMainRight}>
        <div className={classes.userMainRightLeft}>
          <UserRight />
        </div>
        <UserMiddle />
      </div>
    </div>
  );
};

export default UserMain;
