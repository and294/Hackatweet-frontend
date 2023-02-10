import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faHeart } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Tweet.module.css";

function Tweet(props) {
  return (
    <div className={styles.tweetContainer}>
      <div className={styles.headerTweet}>
        <img
          className={styles.profilePic}
          src="/Sacha(24).JPG"
          alt="ProfilePicture"
        />
        <span>
          {props.firstname} - {props.username}
        </span>
        <span>•</span>
        <span>{props.id}</span>
      </div>
      <div className={styles.contentTweet}>
        <p>{props.tweet}</p>
      </div>
      <div className={styles.footerTweet}>
        <div>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faHeart}
            onClick={() => console.log("like")}
          />
        </div>
        <div>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faTrash}
            onClick={() => console.log("delete")}
          />
        </div>
      </div>
    </div>
  );
}
export default Tweet;
