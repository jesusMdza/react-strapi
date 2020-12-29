import "./App.scss";
import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import CaseStudy from "./components/CaseStudy/CaseStudy";
import caseStudyContext from "./shared/context/caseStudy";
import quoteContext from "./shared/context/quote";

function App() {
  const [caseStudies, setCaseStudies] = useState([]);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    // localStorage.setItem("token", JSON.stringify(jwt));
    caseStudyContext.get().then((data) => setCaseStudies(data));
    quoteContext.get().then((data) => setQuotes(data));
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        {caseStudies.map(({ id, title, label, description, theme }) => (
          <CaseStudy
            key={id}
            id={id}
            title={title}
            label={label}
            description={description}
            theme={theme}
          />
        ))}
      </Router>
    </div>
  );
}

export default App;
