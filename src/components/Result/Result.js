import React from "react";
import { Link } from "react-router-dom";
import {Context} from "../../context/ContextProvider";

function Result() {
    return (
        <Context.Consumer>
        {(context) => {
            const { bmi} = Context;
            return (
            console.log(bmi)
            /* <div>
                <h2>Your Bmi is: {bmi}</h2>
                <Link to="/">
                    <button>Try Again </button>
                </Link>
                
            </div> */
            );
           
        }}
        
        </Context.Consumer> 

    );
}

export default Result;

