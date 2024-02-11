import { useNavigate } from "react-router-dom";
import classes from "./LandingDescription.module.css";
const LandingDescription = () => {

  const navigate  = useNavigate();

  const onStarted = () => {
    navigate("/register")
  }

  return (
    <div className={classes.landingDescriptionMain}>
      <div className={classes.landingDescriptionSlogan}>BOOST...!</div>
      <div className={classes.landingDescriptionSloganDescription}>
        Real Organic Socail Media Followers
      </div>
      <div className={classes.landingDescriptionDetail}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium,
        ea vero quae molestiae corporis quidem, aperiam velit placeat quo
        laudantium fugit sed voluptatem, dignissimos delectus dicta veniam
        expedita ipsam perferendis.
      </div>
      <div className={classes.landingDescriptionButton} onClick={onStarted}>Get Started</div>
    </div>
  );
};

export default LandingDescription;
