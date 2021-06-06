import React from "react";
import "./Result.css";
import { Link } from "react-router-dom";
import {Context} from "../../context/ContextProvider";

function Result() {
    return (
        <Context.Consumer>
        {(context) => {
            const { bmi} = context;
            if(bmi < 18.50){
                return (
                    <div className="result">
                        <h2 className="result-heading">Your Bmi</h2>
                        <p className="calc-result" >{bmi}</p>
                        <p className="text-primary result-p">Underweight</p>
                        <Link to="/">
                           <button className="btn result-btn btn-outline-secondary btn-lg">Try Again </button>
                        </Link>
                    </div>
                    );
            }else if(bmi > 18.50 && bmi < 24.99){
                return (
                    <div className="result">
                        <h2 className="result-heading">Your Bmi</h2>
                        <p className="calc-result" >{bmi}</p>
                        <p className="text-success result-p">Normal weight</p>
                        <Link to="/">
                           <button className="btn result-btn btn-outline-secondary btn-lg">Try Again </button>
                        </Link>
                    </div>
                    );
            }else if(bmi >25.00 && bmi < 29.99){
                return (
                    <div className="result">
                        <h2 className="result-heading">Your Bmi</h2>
                        <p className="calc-result" >{bmi}</p>
                        <p className="text-warning result-p">Overweight</p>
                        <Link to="/">
                           <button className="btn result-btn btn-outline-secondary btn-lg">Try Again </button>
                        </Link>
                    </div>
                    );
            }else {
                return (
                    <div className="result">
                        <h2 className="result-heading">Your Bmi</h2>
                        <p className="calc-result" >{bmi}</p>
                        <p className="text-danger result-p">Obese</p>
                        <Link to="/">
                           <button className="btn result-btn btn-outline-secondary btn-lg">Try Again </button>
                        </Link>
                    </div>
                    );
            }
           
        }}
        
        </Context.Consumer> 

    );
}

export default Result;

