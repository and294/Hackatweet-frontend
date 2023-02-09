import styles from "../styles/Login.module.css";

function Login() {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <img src="/Fond.png" />
      </div>
      <div className={styles.right}>

        <img src='/twitter-512.png' className={styles.logo}/>
        <h1>
          See what's <br /> happening
        </h1>
        <h3>Join Hackatweet today.</h3>
        <button className={styles.btnSignUp}>Sign up</button>
        <p>Already have an account?</p>
        <button className={styles.btnSignIn}>Sign in</button>
      </div>
    </div>
  );
}

export default Login;
