import React from 'react';
import "./MyButtonStyles.css";


function MyButton({btnText,clickFunc}) {
  return (
    <button className='customBtn' onClick={clickFunc}>{btnText}</button>
  )
}

export default MyButton;

