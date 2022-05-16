import React, { useState } from "react";
import Button from "./componant/Button";
import "./App.css";

import img from "./componant/image/sun_102839.png";
import img2 from "./componant/image/crescent-moon.png";
function App() {
  const icon = [".", "*", "-", "/", "=", "+"];
  const [number, setNumber] = useState("");
  const [res, setResult] = useState("");

  const getValue = (value) => {
    switch (value !== "") {
      case number === "" && icon.includes(value) && res === "":
        setNumber(number);
        break;
      case value === "AC":
        setNumber("");
        setResult("");
        break;
      case value === "C":
        setNumber(number.slice(0, -1));
        break;
      case number.length > 2 && value === "=":
        setNumber("");
        setResult(window.eval(number)).toString();
        break;
      case res !== "" && icon.includes(value) && number === "":
        setNumber(res + value);
        break;
      case icon.includes(value) && number.charAt(number.length - 1) === value:
        setNumber(number);
        break;
      case icon.includes(number.charAt(number.length - 1)) &&
        icon.includes(value):
        setNumber(number.replace(number.charAt(number.length - 1), value));
        break;
      case value === "%" && number !== "":
        setNumber("");
        setResult(number * "0.10");
        break;
      case value === "%" && number === "" && res !== "":
        setResult(Number(res * 0.10).toFixed(6).toString());
        break;
        case value === "0" && number === "":
        setNumber("");
        break;
      default:
        setNumber(number + value);
    }
  };

  const handdelNightMood = () => {
    const elements = document.querySelectorAll(".day");
    elements.forEach((el) => {
      el.classList.toggle("darck");
    });
    if (document.getElementById("icon").getAttribute("src") === img2) {
      document.getElementById("icon").setAttribute("src", img);
    } else {
      document.getElementById("icon").setAttribute("src", img2);
    }
  };

  return (
    <div className="App">
      <div className="Main-Calculator day">
        <div className="Opration-Calc day">{number !== "" ? number : "0"}</div>
        <div className="Answer-Calc day">{res !== "" ? `=${res}` : "0"}</div>
        <div className="Btn-calculator">
          <button className="change-mood" onClick={handdelNightMood}>
            <img src={img2} alt="iconToggle" id="icon" />
          </button>
          <Button getValue={getValue} />
        </div>
        <footer className="footer">Creat By Eslam Rouzika</footer>
      </div>
    </div>
  );
}

export default App;
