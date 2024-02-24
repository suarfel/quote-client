import Button from "../UI/Button";
import classes from "./UserLeft.module.css";
import { IoHomeOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";
import { useSelector } from "react-redux";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { NavLink } from "react-router-dom";

const UserLeft = () => {
  const width = useSelector((state) => state.nav.width);
  let size = "5rem";
  
  if (width <= 600) {
    size = "2rem";
    
  } else {
    size = "1.5rem";
  }
  return (
    <div className={classes.userLeft}>
      <NavLink
        to="/user"
        className={({ isActive }) => (isActive ? classes.active : undefined)}
      >
        <div>
          <IoHomeOutline style={{ fontSize: size, color: "0fa958" }} />

          {width > 600 && <div>Home</div>}
        </div>
      </NavLink>

      <NavLink
        to="/notifications"
        className={({ isActive }) => (isActive ? classes.active : undefined)}
      >
        <div>
          <IoMdNotificationsOutline
            style={{ fontSize: size, color: "0fa958" }}
          />
          {width > 600 && <div>Notifications</div>}
        </div>
      </NavLink>

      <NavLink
        to="/messages"
        className={({ isActive }) => (isActive ? classes.active : undefined)}
      >
        <div>
          <FaRegMessage style={{ fontSize: size, color: "0fa958" }} />
          {width > 600 && <div>Messages</div>}
        </div>
      </NavLink>

      <NavLink
        to="/bookmarks"
        className={({ isActive }) => (isActive ? classes.active : undefined)}
      >
        <div>
          <FaRegBookmark style={{ fontSize: size, color: "0fa958" }} />
          {width > 600 && <div>Bookmarks</div>}
        </div>
      </NavLink>

      {width > 600 && <Button title="Create Post" width="10rem" />}

      {width <= 600 && (
        <NavLink
        to="/createPost"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          <div>
            <MdOutlineCreateNewFolder
              style={{ fontSize: size, color: "0fa958" }}
            />
          </div>
        </NavLink>
      )}
    </div>
  );
};

export default UserLeft;
