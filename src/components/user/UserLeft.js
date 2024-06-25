import Button from "../UI/Button";
import classes from "./UserLeft.module.css";
import { IoHomeOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { NavLink } from "react-router-dom";

const UserLeft = () => {
  let size = "2rem";

  return (
    <div className={classes.userLeft}>
      <NavLink
        to="/user"
        className={({ isActive }) => (isActive ? classes.active : undefined)}
      >
        <div className={classes.userLeftIcons}>
          <IoHomeOutline style={{ fontSize: size, color: "0fa958" }} />

          <div>Home</div>
        </div>
      </NavLink>

      <NavLink
        to="/notifications"
        className={({ isActive }) => (isActive ? classes.active : undefined)}
      >
        <div className={classes.userLeftIcons}>
          <IoMdNotificationsOutline
            style={{ fontSize: size, color: "0fa958" }}
          />
          <div>Notifications</div>
        </div>
      </NavLink>

      <NavLink
        to="/messages"
        className={({ isActive }) => (isActive ? classes.active : undefined)}
      >
        <div className={classes.userLeftIcons}>
          <FaRegMessage style={{ fontSize: size, color: "0fa958" }} />
          <div>Messages</div>
        </div>
      </NavLink>

      <NavLink
        to="/bookmarks"
        className={({ isActive }) => (isActive ? classes.active : undefined)}
      >
        <div className={classes.userLeftIcons}>
          <FaRegBookmark style={{ fontSize: size, color: "0fa958" }} />
          <div>Bookmarks</div>
        </div>
      </NavLink>
      
      <div className={classes.userLeftIcons}>
        <div>
          <Button title="Create Post" width="10rem" />
        </div>
      </div>

      <NavLink
        to="/createPost"
        className={({ isActive }) => (isActive ? classes.active : undefined)}
      >
      </NavLink>
    </div>
  );
};

export default UserLeft;
