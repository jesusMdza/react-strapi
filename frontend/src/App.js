import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import CaseStudy from "./components/CaseStudy/CaseStudy";

function App() {
  const [caseStudies, setCaseStudies] = useState([]);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    getCaseStudies().then((data) => setCaseStudies(data));
    getQuotes().then((data) => setQuotes(data));
  }, []);

  const getCaseStudies = () => {
    return fetch("http://localhost:1337/case-studies")
      .then((response) => response.json())
      .then((data) => {
        if (data) return data;
      });
  };

  const getQuotes = () => {
    return fetch("http://localhost:1337/quotes")
      .then((response) => response.json())
      .then((data) => {
        if (data) return data;
      });
  };

  return (
    <div className="App">
      <Header />
      {caseStudies.map(({ title, label, description }, i) => (
        <CaseStudy
          key={i}
          title={title}
          label={label}
          description={description}
        />
      ))}
    </div>
  );
}

export default App;
