import classes from "./UserPost.module.css";
import myPhoto from "../../images/surafel_getahun.png";
import { FaRegHeart } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa6";

const UserPost = (props) => {
  return (
    <div className={classes.userPost}>
      <div className={classes.userPostProfile}>
        <div className={classes.userPostProfilePhoto}>
          <img src={myPhoto} />
        </div>
        <div className={classes.userPostProfileName}>{props.post.userName}</div>
        <div className={classes.userPostProfilePeriod}></div>
        <div className={classes.userPostProfileTime}>{props.post.time}</div>
      </div>
      <div className={classes.userPostMain}>{props.post.post}</div>
      <div className={classes.userPostReact}>
        <div className={classes.userPostReactLike}>
          <FaRegHeart />
          <div>{props.post.likes}</div>
        </div>
        <div className={classes.userPostReactComment}>
          <FaRegCommentAlt /> {props.post.comments}
        </div>
        <div className={classes.userPostReactShare}>
          <FaRegBookmark />
          {props.post.shares}
        </div>
        <div className={classes.userPostReactFavourite}>
          <IoShareSocialOutline />
        </div>
      </div>
    </div>
  );
};

export default UserPost;
