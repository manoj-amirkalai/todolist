import { useState } from "react";
import "./App.css";
import InpuText from "./input";
import {GiStairsGoal} from 'react-icons/gi';
import {MdDeleteForever }from 'react-icons/md'

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
  const Todo=(props)=>{
      return(
          <li>
           <p><span><GiStairsGoal/></span> {props.text}</p>
            <button className="delete" onClick={()=>deleteItems(props.id)}><MdDeleteForever/></button>
            </li>
        
      )
  }
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
