import classes from "./RegisterMain.module.css";
import rePhoto from "../../images/register.png";
import { NavLink } from "react-router-dom";
import SignWithGoogle from "./SignWithGoogle";
import RegisterForm from "./RegisterForm";
import { useSelector } from "react-redux";
const RegisterMain = () => {
  const width = useSelector((state) => state.nav.width);
  return (
    <div className={classes.registerMain}>
      <div className={classes.registerImage}>
        {width > 450 && (<img src={rePhoto} style={{ height: "30rem", width:"20rem" }} />)}
        {width <= 450 && (<img src={rePhoto} style={{ height: "30rem", width:"15rem" }} />)}
      </div>
      <div className={classes.registerMainBody}>
        <div className={classes.registerTitle}>Create Your Account</div>
        <div className={classes.registerWithGoogle}>
          <SignWithGoogle />
        </div>
        <div className={classes.registerForm}><RegisterForm /></div>
        <div className={classes.haveAccount}>
          Already have an accout? <NavLink>Login</NavLink>
        </div>
      </div>
    </div>
  );
};

export default RegisterMain;
