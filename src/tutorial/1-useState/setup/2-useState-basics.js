import React, { useState } from 'react';
//useState -function
const UseStateBasics = () => {
  // console.log(useState('hello world'));
  // const value = useState(1)[0]
  // const handler = useState(1)[1];
  // console.log(value, handler);
  const [text, setText] = useState("random textz");
  const handleClick = () => {
    if (text === 'random textz') {
  setText("Cute");
      
    } else {
  setText("random textz");
      
    }
  }
  return <React.Fragment>
    <h1>{text}</h1>
    <button className="btn" onClick={handleClick}>
      change Title
    </button>
  </React.Fragment>
};

export default UseStateBasics;
