import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <div className={classes.reuseButton}>
      <button
        style={{
          height: '2rem',
          width: props.width,
          borderRadius: '0.8rem',
          fontSize: '1rem',
          fontWeight: 600,
        }}
      >
        {props.title}
      </button>
    </div>
  );
};

export default Button;
