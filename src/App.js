import logo from "./cube-2.png";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const domain = "https://web-api-orrl.onrender.com";
  const [values, setValues] = useState([]);

  useEffect(() => {
    const fetchAllIssues = () => {
      fetch(domain)
        .then((res) => res.json())
        .then((data) => {
          setValues(data);
        })
        .catch((err) => console.log(err));
    };
    fetchAllIssues();
  }, [values]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          {values === []
            ? "No data is present to display at the moment"
            : values[values.length - 1]}
        </h3>
        <div className="Container">
          {values.map((val, key) => {
            return <p>{val}</p>;
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
