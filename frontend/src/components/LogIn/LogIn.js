import React, { useState, useEffect } from "react";
import styles from "./SignIn.module.scss";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.SignIn}>
      <input type="text" value={username} />
      <input type="email" value={email} />
    </div>
  );
};

export default SignIn;
