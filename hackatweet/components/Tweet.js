import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faHeart } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Tweet.module.css";

function Tweet() {
  return (
    <div className={styles.tweetContainer}>
      <div className={styles.headerTweet}>
        <img
          src="../public/Sacha(24).JPG"
          alt="ProfilePicture"
        />
        <span>firstname + username</span>
        <span>date from now</span>
      </div>
      <div className={styles.contentTweet}>
        <p>content</p>
      </div>
      <div className={styles.footerTweet}>
        <div className={styles.footerTweetIcons}>
          <FontAwesomeIcon
            icon={faTrash}
            onClick={() => console.log("delete")}
          />
          <FontAwesomeIcon icon={faHeart} onClick={() => console.log("like")} />
        </div>
      </div>
    </div>
  );
}
export default Tweet;
