import React from "react";
import { Link } from "react-router-dom";

function Result() {
    return <div>
        <h2>Your Bmi is: </h2>
        <Link to="/">
             <button>Try Again </button>
        </Link>
        
    </div>
}

export default Result;