import React from "react";
import styles from "./CaseStudy.module.scss";

const CaseStudy = ({ title, label, description }) => {
  return (
    <div className={styles.caseStudy}>
      <div className="container text-left pt-5">
        <div className="mb-5">
          <h1 className="mb-1">{title}</h1>
          <label>{label}</label>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CaseStudy;
