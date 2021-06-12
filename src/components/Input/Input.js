import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/ContextProvider";
import "./Input.css";
import {Button} from "../../styled/Button";

function Input() {

  return (
    <Context.Consumer>
      {(context) => {
       let {calculate, height, handleHeightChange, weight, handleWeightChange, bmiCalc} = context;
      return (  
        <div>
            <div>
              <h2 className="calc-head">Calculate Your BMI</h2>
              <div className="form">
              <form>
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
                  <Link to={bmiCalc > 0 ? "/result" : "/"} style={{ textDecoration: 'none' }}>
                  <Button onClick={calculate}>Calculate</Button>
                  </Link>

                </form>
              </div>
          </div>
    </div>)
    }}

    </Context.Consumer>

  );
}

export default Input;
