import React, { useState } from 'react';
import "./CalculatorApp.css";

function CalculatorApp() {

    const [number1,setNumber1] = useState();

    const [number2,setNumber2] = useState();

    const [result,setResult] = useState(null);

    const [operation,setOperation] = useState("+");
    
    const calculateFunction = () => {
        if(number1 && number2){
            if (operation === "+") {
                setResult(Number(number1) + Number(number2));
              } else if (operation === "-") {
                setResult(Number(number1) - Number(number2));
              } else if (operation === "÷") {
                setResult(Number(number1) / Number(number2));
              } else if(operation === "x"){
                setResult(Number(number1) * Number(number2));
              } else{
                alert("Invalid operation!");
              }

        }else{
            alert("cant pass empty values for calculation!");

        }
    }   
    
  return (
    <div>
        {
            result != null ? (<h1 className='result'>Result:{result} </h1>):null
        }
        <input type='number' value={number1} onChange={(e)=>{
            setNumber1(e.target.value);
        }} />

        <select value={operation} onChange={(e)=>{
            setOperation(e.target.value);
        }}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="x">x</option>
            <option value="÷">÷</option>

        </select>
        <input type='number' value={number2} onChange={(e)=>{
            setNumber2(e.target.value);
        }} />
        <button className='calculateButton' onClick={()=>{
            calculateFunction("subtract");
        }}>Calculate</button>
        
    </div>
  )
}

export default CalculatorApp