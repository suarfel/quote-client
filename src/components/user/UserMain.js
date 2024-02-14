import UserLeft from "./UserLeft";
import classes from "./UserMain.module.css";
import UserMiddle from "./UserMiddle";
import UserPost from "./UserPost";
const UserMain = () => {
  return (
    <div className={classes.userMain}>
        <UserLeft />
        <UserMiddle />
      {/* <div>
        <UserLeft />
      </div>
      <div>
        <UserMiddle />
      </div> */}
    </div>
  );
};

export default UserMain;
