import classes from "./UserToFollow.module.css";
import myPhoto from "../../images/surafel_getahun.png";

const UserToFollow = () => {
  return(
    <div className={classes.userToFollow}>
      <div className={classes.userToFollowMain}>
        <div className={classes.userToFollowMainPhoto}> <img src={myPhoto}/></div>
        <div className={classes.userToFollowDescription}>
          <div className={classes.userToFollowDescriptionFirst}>Surafel Getahun</div>
          <div className={classes.userToFollowDescriptionSecond}>@surafelgetahun</div>
        </div>
      </div>
      <div className={classes.userToFollowFollow}>Follow</div>
    </div>
  );
};

export default UserToFollow;
