import React from "react";
import "./Home.css";
import Input from "../Input/Input";
import Bmi from "../BMI/Bmi";

function Home() {
  return (
    <div className="container">
      <div className="row bmi-calc">
        <div className="col-md-6">
          <Input />
        </div>
        <div className="col-md-4 offset-md-1 bmi-desc">
          <Bmi />
        </div>
      </div>
    </div>
  );
}

export default Home;
