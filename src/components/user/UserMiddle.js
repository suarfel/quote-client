import { AllQuotes } from "../../api/authApi";
import useHttp from "../../hooks/userHttp";
import classes from "./UserMiddle.module.css";
import { useEffect } from "react";
import UserPost from "./UserPost";

const UserMiddle = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(AllQuotes, true);
  
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  return (
    <div className={classes.userMiddle}>
      <div className={classes.userMiddleLatest}>Latest Posts</div>
      <div className={classes.userMiddleAllPosts}>
        {loadedQuotes !== null &&
          loadedQuotes.value.map((val, idx) => (
            <UserPost key={idx} post={val} />
          ))}
      </div>
    </div>
  );
};

export default UserMiddle;
