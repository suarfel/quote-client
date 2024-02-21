import Button from "../UI/Button";
import classes from "./UserLeft.module.css";
import { IoHomeOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";

const UserLeft = () => {
  return (
    <div className={classes.userLeft}>
      <div>
        <IoHomeOutline />
        Home
      </div>
      <div>
        <IoMdNotificationsOutline />
        Notifications
      </div>
      <div>
        <FaRegMessage />
        Messages
      </div>
      <div>
        <FaRegBookmark /> Bookmarks
      </div>
      <Button title="Create Post" width="10rem" />
    </div>
  );
};

export default UserLeft;
