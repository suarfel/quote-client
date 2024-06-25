import classes from "./UserPost.module.css";
import { FaRegHeart, FaBookmark, FaCommentAlt } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { useState, useEffect } from "react";
import useHttp from "../../hooks/userHttp";
import { DislikeQuote, LikeQuote, QuoteDetail } from "../../api/authApi";

const createProfilePicture = (name, size = 200) => {
  const backgroundColor = getRandomColor(); // Get a random color
  const textColor = "#FFFFFF"; // Text color set to white
  const font = "Arial"; // Constant font

  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext("2d");

  // Fill background color
  context.fillStyle = backgroundColor;
  context.fillRect(0, 0, size, size);

  // Set text properties
  const fontSize = size * 0.5;
  context.font = `${fontSize}px ${font}`;
  context.textBaseline = "middle";
  context.textAlign = "center";

  // Draw first letter of the name
  const firstLetter = name.charAt(0).toUpperCase();
  context.fillStyle = textColor;
  context.fillText(firstLetter, size / 2, size / 2);

  return canvas.toDataURL(); // Returns a data URL representing the canvas image
};

// Function to generate a random color (excluding white)
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  do {
    color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
  } while (color === "#FFFFFF"); // Repeat until color is not white
  return color;
};

const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const UserPost = (props) => {
  const d = new Date();
  const c = new Date(props.post.createdDate.toString());
  const postedTime = () => {
    let now = new Date();
    let postTime = new Date(props.post.createdDate.toString());
    let difference = now - postTime;
    var differenceInHours = difference / (1000 * 3600);

    if (differenceInHours > 24) {
      postTime = postTime.toString();
      postTime = postTime.split(" ");
      differenceInHours = postTime[1] + " " + postTime[2];
    } else {
      differenceInHours = differenceInHours.toString() + "h";
    }

    return differenceInHours;
  };

  const {
    sendRequest: likeSendRequest,
    status: likeStatus,
    error: likeError,
    data,
  } = useHttp(LikeQuote, true);

  const {
    sendRequest: disLikeSendRequest,
    status: disStatus,
    error: disError,
  } = useHttp(DislikeQuote, true);

  const {
    sendRequest: quoteDetail,
    status: quoteStatus,
    data: quoteData,
    error: quoteError,
  } = useHttp(QuoteDetail, true);

  const [quoteDataDetail, setQuoteDataDetail] = useState(props.post);

  const IsLiked = (userId) => {
    let isLiked = false;
    let arr = quoteDataDetail.likes;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].userId === userId) {
        isLiked = true;
        break;
      }
    }
    return isLiked;
  };

  const [isLiked, setIsLiked] = useState(
    IsLiked(localStorage.getItem("userId"))
  );
  const [likeCount, setLikeCount] = useState(quoteDataDetail.likes.length);

  useEffect(() => {
    quoteDetail(quoteDataDetail.id).then(() => {
      if (quoteStatus === "completed") {
        setQuoteDataDetail(quoteData.value);
      }
    });
  }, [isLiked]);



  const onLikeHandler = async () => {
    if (isLiked) {
      let arr = quoteDataDetail.likes;
      let likeId;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].userId === localStorage.getItem("userId")) {
          likeId = arr[i].id;
          break;
        }
      }
      await disLikeSendRequest({
        id: likeId,
      });
      quoteDetail(quoteDataDetail.id).then(() => {
        setIsLiked(!isLiked);
        setLikeCount(likeCount - 1);
      });
    } else {
      await likeSendRequest({
        quoteId: quoteDataDetail.id,
        userId: localStorage.getItem("userId"),
      });
       
      await quoteDetail(quoteDataDetail.id).then(() => {
        setIsLiked(!isLiked);
        setLikeCount(likeCount + 1);
      });
    }
  };

  return (
    <div className={classes.userPost}>
      <div className={classes.userPostProfile}>
        <div className={classes.userPostProfilePhoto}>
          {props.post.user.profilePhotos.length == 0 && (
            <img src={createProfilePicture(props.post.user.userName)} />
          )}
          {props.post.user.profilePhotos.length > 0 && (
            <img src={props.post.user.profilePhotos[0].url} />
          )}
        </div>
        <div className={classes.userPostProfileName}>
          {capitalizeFirstLetter(props.post.user.userName)}
        </div>
        <div className={classes.userPostProfilePeriod}></div>
        <div className={classes.userPostProfileTime}>{postedTime()}</div>
      </div>
      <div className={classes.userPostMain}>{props.post.text}</div>
      <div className={classes.userPostReact}>
        <div className={classes.userPostReactLike}>
          {!isLiked && <FaRegHeart onClick={onLikeHandler} />}
          {isLiked && (
            <FaHeart style={{ color: "green" }} onClick={onLikeHandler} />
          )}
          <div>{likeCount}</div>
        </div>
        <div className={classes.userPostReactComment}>
          <FaRegCommentAlt /> {props.post.comments.length}
          <FaCommentAlt style={{ color: "green" }} />
        </div>
        <div className={classes.userPostReactShare}>
          <FaRegBookmark />3
          <FaBookmark style={{ color: "green" }} />
        </div>
        <div className={classes.userPostReactFavourite}>
          <IoShareSocialOutline />
        </div>
      </div>
    </div>
  );
};

export default UserPost;
