import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div
      className={`container d-flex justify-content-between ${styles.header}`}
    >
      <span>MI</span>
      <ul className="d-flex justify-content-between">
        <li>Random</li>
        <li>Links</li>
        <li>Nothing</li>
      </ul>
    </div>
  );
};

export default Header;
