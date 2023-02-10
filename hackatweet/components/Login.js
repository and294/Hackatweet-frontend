import styles from "../styles/Login.module.css";
import { Popover, Button } from "antd";
//import "antd/dist/reset.css";
import "antd/dist/antd.css";
import { useState } from "react";
import { useDispatch } from 'react-redux'
import { login, logout } from "../reducers/user";
import { useRouter } from "next/router";

function Login() {

    const [firstName, setFirstName] = useState('');
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const [loginUserName, setLoginUserName] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const dispatch = useDispatch()

    function handleSignup() {
fetch("http://localhost:3000/users/signup", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    firstname: firstName,
    username: userName,
    password: password,
  }),
})
  .then((response) => response.json())
  .then((data) => {
    dispatch(
      login({
        firstname: data.firstname,
        username: loginUserName,
        token: data.token,
      })
    );
    window.location.replace("/home");
  });
    };

    	const handleSignin = () => {
        fetch("http://localhost:3000/users/signin", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: loginUserName,
            password: loginPassword,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.token) {
              console.log(data.data.firstname)
              dispatch(login({ firstname: data.data.firstname, username: loginUserName, token: data.token }));
             // setLoginUserName("");
              //setLoginPassword("");
              window.location.replace("/home");
            }
          });
      };

const popoverSignUp = (
  <div className={styles.popoverContent}>
    <img src="/twitter-512.png" className={styles.logo} />
    <h2 style={{color: 'white'}}>Create your Hackatweet account</h2>
    <div className={styles.inputsStyle}>
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
    </div>
    <button className={styles.popBtn} onClick={() => handleSignup()}>Sign up</button>
  </div>
);

const popoverSignIn = (
  <div className={styles.popoverContent}>
    <img src="/twitter-512.png" className={styles.logo} />
    <h2 style={{ color: "white" }}>Login your Hackatweet account</h2>
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
    <button className={styles.popBtn} onClick={() => handleSignin()}>
      Sign in
    </button>
  </div>
);

  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <img src="/Fond.png" />
      </div>
      <div className={styles.right}>
        <img src="/twitter-512.png" className={styles.logo} />
        <h1 style={{ color: "white" }}>
          See what's <br /> happening
        </h1>
        <h3 style={{ color: "white", fontSize: 20 }}>Join Hackatweet today.</h3>
        <Popover
          content={popoverSignUp}
          className={styles.popover}
          trigger="click">
          <button className={styles.btnSignUp}>Sign up</button>
        </Popover>

        <p><em>Already have an account?</em></p>
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
