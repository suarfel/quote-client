import classes from "./UserRight.module.css";
import { useEffect, useState } from "react";
import UserToFollow from "./UserToFollow";

let users = [1, 2, 3];
const UserRight = () => {
  const [st, setSt] = useState(false);
  useEffect(() => {}, [st]);
  const onListUsers = () => {
    users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13];
    setSt(!st);
  };
  return (
    <div className={classes.userRight}>
      <div className={classes.userRightTitle}> Who to Follow?</div>
      <div className={classes.userRightBorder}></div>
      <div className={classes.userRightUsers}>
        {users.map((val, idx) => (
          <UserToFollow key={idx} />
        ))}
        <div className={classes.userRightShowMore} onClick={onListUsers}>
          <div>Show more</div>
        </div>
      </div>
    </div>
  );
};

export default UserRight;
