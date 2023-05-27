import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [ValueSetter, setValueSetter] = useState("");
  const buttonHandle = (e) => {
    console.log(e.target.value);
    var DisEl = document.getElementById("display");
    DisEl.value = DisEl.value + e.target.value;
  };
  const FormHandle = (e) => {
    e.preventDefault();
  };
  const equalbuttonHandle = () => {
    var DisEl = document.getElementById("display");
   
    DisEl.value=evaluateExpression(DisEl.value);
  }

function evaluateExpression(inputString) {
  // Check for malicious or invalid input strings
  if (
    inputString.includes("--") ||
    inputString.includes("++") ||
    inputString.includes("*-") ||
    inputString.includes("-*") ||
    inputString.includes("+*") ||
    inputString.includes("*+") ||
    inputString.includes("//") ||
    inputString.includes("**") ||
    inputString.includes("/0") ||
  !/^[-+*/()0-9\s]+$/.test(inputString)
  ) {
    return "Error";
  }

  // Evaluate the expression
  try {
    const result = eval(inputString);
    return result;
  } catch (error) {
    return "Error";
  }
}




const ClearbuttonHandle = () => {
  var DisEl = document.getElementById("display");
  DisEl.value = "";
};

return (
  <>
    <div className="container">
      <h1 className="heading">Calculator App</h1>
      <div className="calculator-main">
        <form onClick={FormHandle}>
          <input type="text" id="display" readOnly className="display" />
          <br />
          <div className="btns">
            <input
              type="button"
              onClick={(e) => buttonHandle(e)}
              className="btn"
              value="1"
            />
            <input
              type="button"
              onClick={(e) => buttonHandle(e)}
              className="btn"
              value="2"
            />
            <input
              type="button"
              onClick={(e) => buttonHandle(e)}
              className="btn"
              value="3"
            />
            <input
              type="button"
              onClick={(e) => buttonHandle(e)}
              className="btn"
              value="+"
            />
            <br />
            <input
              type="button"
              onClick={(e) => buttonHandle(e)}
              className="btn"
              value="4"
            />
            <input
              type="button"
              onClick={(e) => buttonHandle(e)}
              className="btn"
              value="5"
            />
            <input
              type="button"
              onClick={(e) => buttonHandle(e)}
              className="btn"
              value="6"
            />
            <input
              type="button"
              onClick={(e) => buttonHandle(e)}
              className="btn"
              value="-"
            />
            <br />
            <input
              type="button"
              onClick={(e) => buttonHandle(e)}
              className="btn"
              value="7"
            />
            <input
              type="button"
              onClick={(e) => buttonHandle(e)}
              className="btn"
              value="8"
            />
            <input
              type="button"
              onClick={(e) => buttonHandle(e)}
              className="btn"
              value="9"
            />
            <input
              type="button"
              onClick={(e) => buttonHandle(e)}
              className="btn"
              value="*"
            />
            <br />
            <input
              type="button"
              onClick={(e) => buttonHandle(e)}
              className="btn"
              value="0"
            />
              <input
                type="button"
                onClick={(e) => buttonHandle(e)}
                className="btn"
                value="."
              />
            <input
              type="submit"
              onClick={equalbuttonHandle}
              className="btn"
              value="="
            />

            <input
              type="button"
              onClick={(e) => buttonHandle(e)}
              className="btn"
              value="/"
            />
            <br />

            <input
              type="button"
              onClick={(e) => buttonHandle(e)}
              className="btn"
              value="("
            />
            <input
              type="button"
              onClick={(e) => buttonHandle(e)}
              className="btn"
              value=")"
            />
            <input
              type="button"
              onClick={ClearbuttonHandle}
              className="ResetBtn"
              value="Clear"
            />
          </div>
        </form>
      </div>
    </div>
  </>
);
}

export default App;
