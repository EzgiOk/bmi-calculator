import React from "react";
//import {Link} from "react-router-dom";

function ResultComponent({bmi, userWeight, color}) {
    return (
    <React.Fragment>
            <div className="result">
                <h2 className="result-heading">Your Bmi</h2>
                 <p className="calc-result">{bmi}</p>
                <p className={color}>{userWeight}</p>
            </div>
    </React.Fragment>
    );
  
}

export default ResultComponent;