import React from "react";
import "./Bmi.css";


function Bmi() {
  return (
<div className="accordion mt-4 mb-5" id="accordionExample">
  <div className="card">
    <div className="card-header" id="headingOne">
      <h2 className="mb-0">
        <button className="btn coll-btn btn-outline-secondary btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        What Is BMI?
        </button>
      </h2>
    </div>

    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body">
      BMI is a measurement that takes into account your height and weight to produce a calculation. This calculation is a measurement of your body size and can be used to determine how your body weight is related to your height.

      BMI is not a diagnostic tool nor is it a measurement of body fat percentage. A high BMI may be an indicator of high body fat, but it doesn't necessarily mean that a person is overweight or obese and it alone is not a direct indicator of health.



      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingTwo">
      <h2 className="mb-0">
        <button className="btn coll-btn btn-outline-secondary btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        How BMI Is Measured?
        </button>
      </h2>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div className="card-body">
      <p>Metric</p>
      <ul>
        <li>Formula: weight (kg) / [height (m)]21</li>
        <li>Example: weight = 68 kg, height = 165 cm (1.65 m)</li>
        <li>BMI calculation: 68 / (1.65)2 = 24.98</li>
      </ul>
      </div>
    </div>
  </div>
</div>

  );
}

export default Bmi;
