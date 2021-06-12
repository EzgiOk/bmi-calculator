import { createContext, useState} from "react"
import React from "react";


export const Context = createContext();

export function ContextProvider(props){
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmi, setBmi] = useState();

    let bmiCalc = (weight / (height / 100) ** 2).toFixed(2);

    // useEffect(()=>{
    //     setBmi(bmiCalc);
    // }, [bmiCalc])
  
    function calculate(e) {
     bmiCalc = (weight / (height / 100) ** 2).toFixed(2);
      setHeight()
      setWeight()
      setBmi(bmiCalc);
  }
  localStorage.setItem("bmi", bmi);
  
    function handleHeightChange(e) {
      let heightValue = e.target.value;
      setHeight(heightValue);
    }
  
    function handleWeightChange(e) {
      let weightValue = e.target.value;
      setWeight(weightValue);
    }

    return (
        <Context.Provider value={{calculate, handleHeightChange, handleWeightChange, bmi, height, weight, bmiCalc}}>
            {props.children}
        </Context.Provider>
    )
}

