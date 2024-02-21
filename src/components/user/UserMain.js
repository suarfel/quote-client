import UserLeft from "./UserLeft";
import classes from "./UserMain.module.css";
import UserMiddle from "./UserMiddle";
import UserPost from "./UserPost";
import UserRight from "./UserRight";
const UserMain = () => {
  return (
    <div className={classes.userMain}>
      <div className={classes.userMainLeft}>
        <UserLeft />
        <UserRight />
      </div>
      <div className={classes.userMainRight}>
        <UserMiddle />
      </div>
    </div>
  );
};

export default UserMain;
