import classes from "./ProfileStatus.module.css";
import { IoIosArrowDropdown } from "react-icons/io";
import myPhoto from "../../images/surafel_getahun.png";
import { useDispatch, useSelector } from "react-redux";
import { navActions } from "../../store/home";

const ProfileStatus = () => {
  const userName = useSelector((state) => state.user.userName);
  const dispatch = useDispatch();

  const onDropDown = () => {
    dispatch(navActions.changeLoading());
  };

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
  return (
    <div className={classes.navProfile} onClick={onDropDown}>
      <div className={classes.navProfilePhoto}>
        <img src={myPhoto} />
      </div>
      <div className={classes.navProfileUserName}>{capitalizeFirstLetter(userName)}</div>
      <div className={classes.navProfileDrop}>
        <IoIosArrowDropdown />
      </div>
    </div>
  );
};

export default ProfileStatus;
