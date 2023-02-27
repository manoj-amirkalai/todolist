import { useState } from "react";
import "./App.css";
import InpuText from "./input";
import { GiStairsGoal } from "react-icons/gi";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";
// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

function App() {
  const [items, setItems] = useState([]);
  const additems = (inputext) => {
    setItems((previtems) => {
      return [...previtems, inputext];
    });
  };
  const deleteItems = (id) => {
    setItems((previtems) => {
      return previtems.filter((item, index) => {
        return index !== id;
      });
    });
  };
  const Todo = (props) => {
    return (
      <li>
        <p>
          <span>
            <GiStairsGoal />
          </span>{" "}
          {props.text}
        </p>
        <button className="delete" onClick={() => deleteItems(props.id)}>
          <lord-icon
            src="https://cdn.lordicon.com/jmkrnisz.json"
            trigger="morph"
            colors="primary:#121331"
            state="morph-fill"
            style={{ width: "15px", height: "15px" }}
          ></lord-icon>
        </button>
      </li>
    );
  };
  return (
    <div className="body">
      <InpuText additems={additems} />
      <div>
        <ul>
          {items.map((item, index) => {
            return (
              <Todo
                key={index}
                text={item}
                id={index}
                deleteItems={deleteItems}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
