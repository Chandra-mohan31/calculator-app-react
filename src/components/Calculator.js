import React, { useState } from 'react';
import "./Calculator.css";
import NumberSymbolButton from './NumberSymbolButton';

function Calculator() {
    const [calciInput,setCalciInput] = useState("");

    const handleChangeCalciInput = (e) =>{
        setCalciInput(e.target.value);
    }

    const handleClickNumberSymbolButton = (symbol) =>{
        setCalciInput(calciInput+symbol);
    }
    const clearLastValue = () => {
        setCalciInput(calciInput.slice(0,calciInput.length - 1))
    }

    const evaluate = () => {
        console.log("calculate the value");
        console.log(calciInput);
        try {
            const result = calciInput;
            setCalciInput(result);
          } catch (error) {
            alert( 'Error: Invalid expression');
          }
    }

    const reset = () => {
        setCalciInput("");
    }
  return (
    <div className='calculator_container'>
        <input className='calculator_input' type="text" value={calciInput} placeholder='' onChange={handleChangeCalciInput} />
        <div className="calculator">
  <div className="row">
    <NumberSymbolButton btnClickFunc={() => handleClickNumberSymbolButton("(")} btnText="(" />
    <NumberSymbolButton btnClickFunc={() => handleClickNumberSymbolButton(")")} btnText=")" />
    <NumberSymbolButton btnClickFunc={reset} btnText="C" />
    <NumberSymbolButton btnClickFunc={() => handleClickNumberSymbolButton("/")} btnText="/" />
  </div>
  <div className="row">
    <NumberSymbolButton btnClickFunc={() => handleClickNumberSymbolButton("7")} btnText="7" />
    <NumberSymbolButton btnClickFunc={() => handleClickNumberSymbolButton("8")} btnText="8" />
    <NumberSymbolButton btnClickFunc={() => handleClickNumberSymbolButton("9")} btnText="9" />
    <NumberSymbolButton btnClickFunc={() => handleClickNumberSymbolButton("*")} btnText="*" />
  </div>
  <div className="row">
    <NumberSymbolButton btnClickFunc={() => handleClickNumberSymbolButton("4")} btnText="4" />
    <NumberSymbolButton btnClickFunc={() => handleClickNumberSymbolButton("5")} btnText="5" />
    <NumberSymbolButton btnClickFunc={() => handleClickNumberSymbolButton("6")} btnText="6" />
    <NumberSymbolButton btnClickFunc={() => handleClickNumberSymbolButton("-")} btnText="-" />
  </div>
  <div className="row">
    <NumberSymbolButton btnClickFunc={() => handleClickNumberSymbolButton("1")} btnText="1" />
    <NumberSymbolButton btnClickFunc={() => handleClickNumberSymbolButton("2")} btnText="2" />
    <NumberSymbolButton btnClickFunc={() => handleClickNumberSymbolButton("3")} btnText="3" />
    <NumberSymbolButton btnClickFunc={() => handleClickNumberSymbolButton("+")} btnText="+" />
  </div>
  <div className="row">
    <NumberSymbolButton btnClickFunc={() => handleClickNumberSymbolButton("0")} btnText="0" />
    <NumberSymbolButton btnClickFunc={() => handleClickNumberSymbolButton(".")} btnText="." />
    <NumberSymbolButton btnClickFunc={clearLastValue} btnText="x" />
    <NumberSymbolButton btnClickFunc={evaluate} btnText="=" />
  </div>
</div>



</div>



      

  )
}

export default Calculator