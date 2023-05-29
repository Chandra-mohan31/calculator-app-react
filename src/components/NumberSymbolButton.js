import React from 'react'
import "./NumberSymbolButton.css";
function NumberSymbolButton({btnText,btnClickFunc}) {
  function isDigit(number) {
    return ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(number);
  }
  const number_pad_style = {
    backgroundColor: '#bbb'
  }
  const equalToStyle = {
      backgroundColor: "#0072c5"
  }
  const normal_btn_styles = {
    backgroundColor: '#e0e1dd'
  }
  console.log(isDigit('1'));
  console.log(btnText)
  return (
    btnText === '=' ? (
      <button className='numberSymbolButton' onClick={btnClickFunc} style={equalToStyle}>{btnText}</button>
    ) : (
      <button className='numberSymbolButton' onClick={btnClickFunc} style={isDigit(btnText) ? number_pad_style : normal_btn_styles}>{btnText}</button>
    )
  )
}

export default NumberSymbolButton