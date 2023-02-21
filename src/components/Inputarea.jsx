import React, { useState } from "react";
import "./InputArea.css";

const Inputarea = (props) => {
  const [inputText, setInputText] = useState("");
  const handlechange = (event) => {
    setInputText(event.target.value);
  };
  return (
    <div className="form">
      <input
        type="text"
        placeholder="Enter"
        value={inputText}
        onChange={handlechange}
      />
      <button
        onClick={() => {
          if (inputText.trim().length !== 0) {
            props.addItems(inputText);
            setInputText("");
          } else {
            alert("Please Enter some task ");
          }
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
};

export default Inputarea;
