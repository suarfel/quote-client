import classes from "./ProfileStatus.module.css";
import { IoIosArrowDropdown } from "react-icons/io";
import myPhoto from "../../images/surafel_getahun.png";
import { useDispatch, useSelector } from "react-redux";
import { navActions } from "../../store/home";

const ProfileStatus = () => {
  const isLoading = useSelector((state) => state.nav.isLoading);
  const dispatch = useDispatch();

  const onDropDown = () => {
    dispatch(navActions.changeLoading());
  };
  return (
    <div className={classes.navProfile} onClick={onDropDown}>
      <div className={classes.navProfilePhoto}>
        <img src={myPhoto} />
      </div>
      <div className={classes.navProfileUserName}>Surafel Getahun</div>
      <div className={classes.navProfileDrop}>
        <IoIosArrowDropdown />
      </div>
    </div>
  );
};

export default ProfileStatus;
