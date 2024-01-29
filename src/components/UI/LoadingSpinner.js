import classes  from "./LoadingSpinner.module.css";
const LoadingSpinner = () => {
  return (
    <div className={classes.modalOverLay}>
    <div className={classes.position}>
      <div className={classes.spinner}></div>
    </div>
    </div>
  );
};

export default LoadingSpinner;
