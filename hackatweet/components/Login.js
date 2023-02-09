import styles from "../styles/Login.module.css";
import { Popover, Button } from "antd";
import "antd/dist/reset.css";

function Login() {

const popoverSignUp = (
  <div className={styles.popoverContent}>
    <img src="/twitter-512.png" className={styles.logo} />
    <h2>Create your Hackatweet account</h2>
    <input type="text" />
    <input type="text" />
    <input type="text" />
    <button>Sign up</button>
  </div>
);

const popoverSignIn = (
  <div className={styles.popoverContent}>
    <img src="/twitter-512.png" className={styles.logo} />
    <h2>Create your Hackatweet account</h2>
    <input type="text" />
    <input type="text" />
    <input type="text" />
    <button>Sign in</button>
  </div>
);

  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <img src="/Fond.png" />
      </div>
      <div className={styles.right}>
        <img src="/twitter-512.png" className={styles.logo} />
        <h1>
          See what's <br /> happening
        </h1>
        <h3>Join Hackatweet today.</h3>
        <Popover
          content={popoverSignUp}
          className={styles.popover}
          trigger="click">
          <button className={styles.btnSignUp}>Sign up</button>
        </Popover>

        <p>Already have an account?</p>
        <Popover
          content={popoverSignIn}
          className={styles.popover}
          trigger="click">
          <button className={styles.btnSignIn}>Sign in</button>
        </Popover>
      </div>
    </div>
  );
}

export default Login;
