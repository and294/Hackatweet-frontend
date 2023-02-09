import styles from "../styles/Home.module.css";
import Tweet from "./Tweet";

function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <img src="/twitter-512.png" className={styles.logo} />
        <div className={styles.user}>
          <div className={styles.userInfo}>
            <img alt="profil pic" />
            <div className={styles.userName}>
              <h3>John</h3>
              <p>@JohnCena</p>
            </div>
          </div>

          <button className={styles.logoutBtn}>Logout</button>
        </div>
      </div>

      <div className={styles.middle}>
        <div className={styles.top}>
          <h1 className={styles.homeTitle}>Home</h1>

          <input type="text" name="" id="" className={styles.tweetInput} />

          <div className={styles.lengthAndButton}>
            <p>0/280</p>
            <button className={styles.tweetBtn}>Tweet</button>
          </div>
        </div>
        <div className={styles.middleBottom}>
          <Tweet />
        </div>
      </div>

      <div className={styles.right}>
        <h1 className={styles.trendTitle}>Trends</h1>
        <div className={styles.trendContainer}>
          <div className={styles.trend}>
            <h4>#hackatweet</h4>
            <p style={{ color: "gray" }}>2 Tweets</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
