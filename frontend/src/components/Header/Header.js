import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div
      className={`d-flex justify-content-between pr-5 pl-5 pt-3 ${styles.header}`}
    >
      <span>MI</span>
      <ul className="d-flex justify-content-between">
        <li className="mr-2">Random</li>
        <li className="mr-2">Links</li>
        <li>Nothing</li>
      </ul>
    </div>
  );
};

export default Header;
