import styles from "../styles/Home.module.css";
import Tweet from "./Tweet";
import Trends from "./Trends";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reducers/user";


function Home() {

const user = useSelector((state) => state.user.value);
console.log(user)

  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <img src="/twitter-512.png" className={styles.logo} />
        <div className={styles.user}>
          <div className={styles.userInfo}>
            <img className={styles.profilPic} alt="profil pic" src='/Sacha(24).JPG'/>
            <div className={styles.userName}>
              <h3>{user.firstname}</h3>
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
        <Trends />
      </div>
    </div>
  );
}

export default Home;
