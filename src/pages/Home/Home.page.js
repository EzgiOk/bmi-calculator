import React from "react";
import "./Home.page.css";
import Input from "../../components/Input/Input";
import Bmi from "../../components/BMI/Bmi";

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 bmi-calc">
          <Input />
        </div>
        <div className="col-md-5 offset-md-1 bmi-desc">
          <Bmi />
        </div>
      </div>
    </div>
  );
}

export default Home;
