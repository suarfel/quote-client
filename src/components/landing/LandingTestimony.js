import classes from "./LandingTestimony.module.css";
const LandingTestimony = (props) => {
  return (
    <div className={classes.landingTestimony}>
      <div className={classes.landingTestimonyIcon} style={{color : props.val.style}}>{props.val.icon}</div>
      <div className={classes.landingTestimonyTitle}>{props.val.title}</div>
      <div className={classes.landingTestimonyDescription}>
        {props.val.description}
      </div>
    </div>
  );
};

export default LandingTestimony;
