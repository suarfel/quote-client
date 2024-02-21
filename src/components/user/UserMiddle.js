import classes from "./UserMiddle.module.css";
import UserPost from "./UserPost";
const posts = [
  {
    userName: "Surafel Getahun",
    post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autemexercitationem tenetur praesentium in delectus sed amet at sint impedititaque cumque perferendis id, cupiditate quam, a voluptates voluptatemratione nisi?",
    likes: "1.1k",
    time: "2h",
    shares: "52",
    comments: "12",
  },
  {
    userName: "Abebe Kebede",
    post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autemexercitationem tenetur praesentium in delectus sed amet at sint impedititaque cumque perferendis id, cupiditate quam, a voluptates voluptatemratione nisi?",
    likes: "28",
    time: "2h",
    shares: "5",
    comments: "42",
  },
  {
    userName: "Segni Ayele",
    post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autemexercitationem tenetur praesentium in delectus sed amet at sint impedititaque cumque perferendis id, cupiditate quam, a voluptates voluptatemratione nisi?",
    likes: "1.1k",
    time: "2h",
    shares: "52",
    comments: "12",
  },
  {
    userName: "Hagos Tamru",
    post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autemexercitationem tenetur praesentium in delectus sed amet at sint impedititaque cumque perferendis id, cupiditate quam, a voluptates voluptatemratione nisi?",
    likes: "1.1k",
    time: "5h",
    shares: "52",
    comments: "12",
  },
  {
    userName: "Tamru Aleke",
    post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autemexercitationem tenetur praesentium in delectus sed amet at sint impedititaque cumque perferendis id, cupiditate quam, a voluptates voluptatemratione nisi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Autemexercitationem tenetur praesentium in delectus sed amet at sint impedititaque cumque perferendis id, cupiditate quam, a voluptates voluptatemratione nisi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Autemexercitationem tenetur praesentium in delectus sed amet at sint impedititaque cumque perferendis id, cupiditate quam, a voluptates voluptatemratione nisi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Autemexercitationem tenetur praesentium in delectus sed amet at sint impedititaque cumque perferendis id, cupiditate quam, a voluptates voluptatemratione nisi?",
    likes: "1.1k",
    time: "2h",
    shares: "2",
    comments: "32",
  },
];
const UserMiddle = () => {
  return (
    <div className={classes.userMiddle}>
      <div className={classes.userMiddleLatest}>Latest Posts</div>
      <div className={classes.userMiddleAllPosts}>
        {posts.map((val, idx) => (
          <UserPost key={idx} post={val} />
        ))}
      </div>
    </div>
  );
};

export default UserMiddle;
