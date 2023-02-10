import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faHeart } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Tweet.module.css";
import { useSelector } from "react-redux";

function Tweet(props) {
  const user = useSelector((state) => state.user.value);

  console.log("🚀", props);

  function handleDelete(id) {
    fetch(`http://localhost:3000/tweets/del/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("delete");
      });
  }

  let deleteBtn;
  if (props.username === user.username) {
    deleteBtn = (
      <FontAwesomeIcon
        className={styles.icon}
        icon={faTrash}
        onClick={() => handleDelete()}
      />
    );
  }

  return (
    <div className={styles.tweetContainer}>
      <div className={styles.headerTweet}>
        <img
          className={styles.profilePic}
          src="/Sacha(24).JPG"
          alt="ProfilePicture"
        />
        <span>
          {props.firstname} - @{props.username}
        </span>
        <span>•</span>
        <span>{props.id}</span>
      </div>
      <div className={styles.contentTweet}>
        <p>{props.content}</p>
      </div>
      <div className={styles.footerTweet}>
        <div>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faHeart}
            onClick={() => console.log("like")}
          />
        </div>
        <div>{deleteBtn}</div>
      </div>
    </div>
  );
}
export default Tweet;
