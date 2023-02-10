import styles from "../styles/Home.module.css";
import Tweet from "./Tweet";
import Trends from "./Trends";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reducers/user";
import { useState, useEffect } from "react";

function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  function handleLogout() {
    dispatch(logout());
    window.location.replace("/");
  }

  const [tweetMsg, setTweetMsg] = useState("");
  const [tweetLength, setTweetLength] = useState(0);
  const [trigger, setTrigger] = useState(false);

  function handleTweetChange(str) {
    setTweetMsg(str);
    setTweetLength(tweetMsg.length + 1);
    if (tweetMsg.length + 1 == 0) {
      setTweetLength(0);
    }
    console.log(tweetMsg, tweetLength);
  }

  function handleAddTweet() {
    fetch("http://localhost:3000/tweets/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: user.username,
        firstname: user.firstname,
        content: tweetMsg,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setTrigger(!trigger);
      });
  }

  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/tweets")
      .then((response) => response.json())
      .then((TweetData) => {
        setTweets(
          TweetData.tweet.map((data, i) => {
            {
              return <Tweet key={i} id={data._id} {...data} />;
            }
          })
        );
      });
  }, [trigger]);

  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <img src="/twitter-512.png" className={styles.logo} />
        <div className={styles.user}>
          <div className={styles.userInfo}>
            <img
              className={styles.profilPic}
              alt="profil pic"
              src="/Sacha(24).JPG"
            />
            <div className={styles.userName}>
              <h3>{user.firstname}</h3>
              <p>@{user.username}</p>
            </div>
          </div>

          <button className={styles.logoutBtn} onClick={() => handleLogout()}>
            Logout
          </button>
        </div>
      </div>

      <div className={styles.middle}>
        <div className={styles.top}>
          <h1 className={styles.homeTitle}>Home</h1>

          <input
            type="text"
            name=""
            maxLength="280"
            className={styles.tweetInput}
            onChange={(e) => handleTweetChange(e.target.value)}
          />

          <div className={styles.lengthAndButton}>
            <p>{tweetLength}/280</p>
            <button
              className={styles.tweetBtn}
              onClick={() => handleAddTweet()}
            >
              Tweet
            </button>
          </div>
        </div>
        <div className={styles.middleBottom}>{tweets}</div>
      </div>

      <div className={styles.right}>
        <Trends />
      </div>
    </div>
  );
}

export default Home;
