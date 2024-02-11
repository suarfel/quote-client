import classes from "./LandingMain.module.css";
import homePhoto from "../../images/home.png";
import LandingDescription from "./LandingDescription";
import { FaProductHunt } from "react-icons/fa6";
import { SiCoinmarketcap } from "react-icons/si";
import { AiFillBank } from "react-icons/ai";
import LandingTestimony from "./LandingTestimony";
import { useLocation } from "react-router-dom";

const testimonyDatas = [
  {
    icon: <FaProductHunt />,
    title: "Product Search",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id delectus ea quasi voluptas tenetur vero neque, ullam assumenda debitis consequatur nisi excepturi optio corrupti, dolores architecto, porro nostrum sapiente corporis!",
    style: "red",
  },
  {
    icon: <SiCoinmarketcap />,
    title: "Market Search",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id delectus ea quasi voluptas tenetur vero neque, ullam assumenda debitis consequatur nisi excepturi optio corrupti, dolores architecto, porro nostrum sapiente corporis!",
    style: "orange",
  },
  {
    icon: <AiFillBank />,
    title: "Improve your Economy",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id delectus ea quasi voluptas tenetur vero neque, ullam assumenda debitis consequatur nisi excepturi optio corrupti, dolores architecto, porro nostrum sapiente corporis!",
    style: "blue",
  },
];

const LandingMain = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className={classes.landingMain}>
      {path !== "/register" && path !== "/login" && (
        <div className={classes.landingDescriptionOne}>
          <div className={classes.landingDescriptionleft}>
            <LandingDescription />
          </div>
          <div className={classes.homePhoto}>
            <img src={homePhoto} />
          </div>
        </div>
      )}
      <div className={classes.landingDescriptionTwo}>
        <div className={classes.landingDescriptionTwoTitle}>How It Works</div>
        <div className={classes.landingDescriptionTwoDiver}>
          {" "}
          <div className={classes.landingDescriptionTwoParagraph}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
            delectus ea quasi voluptas tenetur vero neque, ullam assumenda
            debitis consequatur nisi excepturi optio corrupti, dolores
            architecto, porro nostrum sapiente corporis!
          </div>
        </div>
      </div>
      <div className={classes.landingDescriptionThree}>
        {testimonyDatas.map((val, idx) => (
          <div key={idx}>
            <LandingTestimony key={idx} val={val} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingMain;
