import React, { useState, useEffect } from "react";
import styles from "./CaseStudy.module.scss";
import caseStudyContext from "../../shared/context/caseStudy";

const CaseStudy = (props) => {
  const { id, title, label, description, theme } = props;

  const [isEditing, setIsEditing] = useState(false);
  const [caseTitle, setCaseTitle] = useState(title);
  const [caseLabel, setCaseLabel] = useState(label);
  const [caseDescription, setCaseDescription] = useState(description);

  const body = {
    title: caseTitle,
    label: caseLabel,
    caseDescription: caseDescription,
    theme: theme,
  };

  const handleInputChange = (e) => {
    setCaseTitle(e.target.value);
  };

  const editCaseStudy = () => {
    setIsEditing(true);
  };

  const cancel = () => {
    setIsEditing(false);
    setCaseTitle(title);
    setCaseLabel(label);
    setCaseDescription(description);
  };

  return (
    <div className={styles.caseStudy}>
      <div className={theme === "light" ? styles.light : styles.dark}>
        <div className={"container text-left pt-5"}>
          {!isEditing ? (
            <>
              <div className={styles.editContainer}>
                <button className={styles.editButton} onClick={editCaseStudy}>
                  Edit
                </button>
              </div>
              <div className="mb-5">
                <h1 className="mb-1">{title}</h1>
                <label>{label}</label>
              </div>
              <p>{description}</p>
            </>
          ) : (
            <>
              <div className={styles.editContainer}>
                <button
                  className={`${styles.editButton} mr-1`}
                  onClick={editCaseStudy}
                >
                  Edit
                </button>
                <button
                  className={`${styles.saveButton} mr-1`}
                  onClick={() => caseStudyContext.update(id)}
                >
                  Save
                </button>
                <button onClick={cancel}>Cancel</button>
              </div>
              <div className="mb-5">
                <h1 className="mb-1">
                  <input
                    onChange={(e) => handleInputChange(e)}
                    className="mb-1"
                    defaultValue={caseTitle}
                  />
                </h1>
                <label>
                  <input defaultValue={label} />
                </label>
              </div>
              <p>
                <textarea className="w-100" defaultValue={description} />
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
