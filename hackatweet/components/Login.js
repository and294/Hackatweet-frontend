import styles from "../styles/Login.module.css";
import { Popover, Button } from "antd";
import "antd/dist/reset.css";
import { useState } from "react";

function Login() {

    const [firstName, setFirstName] = useState('');
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const [loginUserName, setLoginUserName] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    function handleSignup() {
fetch("http://localhost:3000/users/signup", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ firstname: firstName, username: userName, password: password }),
}).then(response => response.json())
.then(data => {
    console.log(data)
})
    }

const popoverSignUp = (
  <div className={styles.popoverContent}>
    <img src="/twitter-512.png" className={styles.logo} />
    <h2>Create your Hackatweet account</h2>
    <input
      type="text"
      placeholder="Firstname"
      className={styles.input}
      onChange={(e) => setFirstName(e.target.value)}
    />
    <input
      type="text"
      placeholder="Username"
      className={styles.input}
      onChange={(e) => setUserName(e.target.value)}
    />
    <input
      type="password"
      placeholder="Password"
      className={styles.input}
      onChange={(e) => setPassword(e.target.value)}
    />
    <button onClick={() => handleSignup()}>Sign up</button>
  </div>
);

const popoverSignIn = (
  <div className={styles.popoverContent}>
    <img src="/twitter-512.png" className={styles.logo} />
    <h2>Create your Hackatweet account</h2>
    <input
      type="text"
      placeholder="Username"
      className={styles.input}
      onChange={(e) => setLoginUserName(e.target.value)}
    />
    <input
      type="password"
      placeholder="Password"
      className={styles.input}
      onChange={(e) => setLoginPassword(e.target.value)}
    />
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
