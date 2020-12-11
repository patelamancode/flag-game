import React from "react";
import "./styles.css";
import { useState } from "react";

var flagDictionary = {
  "🏁": "Chequered Flag",
  "🚩": "Triangular Flag",
  "🎌": "Crossed Flags",
  "🏴": "Black Flag",
  "🏳": "White Flag",
  "🏳️‍🌈": "Rainbow Flag",
  "🏳️‍⚧️": "Transgender Flag",
  "🏴‍☠️": "Pirate Flag"
};

var flagweknow = Object.keys(flagDictionary);
export default function App() {
  var [meaning, setMeaning] = useState("");

  function flaginputhandler(event) {
    var userInput = event.target.value;
    var meaning = flagDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Sorry not found";
    }
    setMeaning(meaning);
  }

  function flagclickhandler(flag) {
    var meaning = flagDictionary[flag];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Fun With Flag🏳️‍🌈</h1>
      <input onChange={flaginputhandler}></input>
      <h2>{meaning}</h2>

      <h3>Select anyone flag shown below 👇</h3>

      {flagweknow.map(function (flag) {
        return (
          <div
            className="flagIcon"
            onClick={() => flagclickhandler(flag)}
            key={flag}
          >
            {flag}
          </div>
        );
      })}
    </div>
  );
}
