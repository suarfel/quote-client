import classes from "./SignWithGoogle.module.css";
import { SiGoogle } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
const SignWithGoogle = () => {
  const googleColors = ["#4285F4", "#EA4335", "#FBBC05", "#34A853"];
  return (
    <div className={classes.signGoogle}>
      <div className={classes.signGoogleButton}>
        <FcGoogle />

        <div>Login with Google</div>
      </div>
      <div className={classes.signGoogleChoice}>
        <div className={classes.line}></div>
        <div className={classes.signOr}>Or</div>
        <div className={classes.line}></div>
      </div>
    </div>
  );
};
export default SignWithGoogle;
