import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Input.css";

function Input() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");

  function calculate(e) {
    e.preventDefault();

    const bmiCalc = (weight / (height / 100) ** 2).toFixed(2);
    setBmi(bmiCalc);
  }

  function handleHeightChange(e) {
    let heightValue = e.target.value;
    setHeight(heightValue);
  }

  function handleWeightChange(e) {
    let weightValue = e.target.value;
    setWeight(weightValue);
  }

  return (
    <div>
      <div>
        <h2 className="calc-head">Calculate Your BMI</h2>
        <div className="form">
          <form onSubmit={calculate}>
            <div className="input-group mb-3">
              <input
                value={height}
                onChange={handleHeightChange}
                type="text"
                className="form-control"
                placeholder="Height"
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  cm
                </span>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                value={weight}
                onChange={handleWeightChange}
                type="text"
                className="form-control"
                placeholder="Weight"
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  kg
                </span>
              </div>
            </div>

            <Link to="/result">
                <button className="btn btn-block btn-secondary mb-3">
                Calculate
                </button>
            </Link> 

          </form>
          <p>{bmi}</p>
        </div>
      </div>
    </div>
  );
}

export default Input;
