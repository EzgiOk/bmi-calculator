import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/ContextProvider";
import "./Input.css";
import {Button} from "../../styled/Button";

function Input() {

  return (
    <Context.Consumer>
      {(context) => {
      return (  
        <div>
            <div>
              <h2 className="calc-head">Calculate Your BMI</h2>
              <div className="form">
              <form onSubmit={context.calculate}>
                  <div className="input-group mb-3">
                    <input
                      value={context.height}
                      onChange={context.handleHeightChange}
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
                      value={context.weight}
                      onChange={context.handleWeightChange}
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
                  <Link to="/result" style={{ textDecoration: 'none' }}>
                  <Button>Calculate</Button>
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
