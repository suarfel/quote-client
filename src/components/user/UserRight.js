import classes from "./UserRight.module.css";

const UserRight = () => {
  return (
    <div className={classes.userRight}>
      <div className={classes.userRightTitle}> Who to Follow?</div>
      <div className={classes.userRightBorder}></div>
      <div className={classes.userRightUsers}></div>
      <div className={classes.userRightShowMore}>Show More</div>
    </div>
  );
};

export default UserRight;
