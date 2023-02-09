import styles from "../styles/Home.module.css";
import Tweet from "./Tweet";

function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <img src="/twitter-512.png" className={styles.logo} />
        <div className={styles.user}>
          <img alt="profil pic" />
          <div>
            <h6>John</h6>
            <p>@JohnCena</p>
          </div>
          <button>Logout</button>
        </div>
      </div>

      <div className={styles.middle}>
        <div className={styles.top}>
            <h1 className={styles.homeTitle}>Home</h1>

            <input type="text" name="" id="" className={styles.tweetInput}/>

          <div className={styles.lengthAndButton}>
            <p>0/280</p>
            <button className={styles.tweetBtn}>Tweet</button>
          </div>
        </div>
        <div className={styles.middleBottom}>
          <Tweet />
        </div>
      </div>

      <div className={styles.right}></div>
    </div>
  );
}

export default Home;
