import React, { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [data, setData] = useState(null);
  const [data1, setData1] = useState([]);
  function onSubmit(e) {
    setData(e.target.value);
  }
  function onButton() {
    setData1([...data1, data]);
  }

  return (
    <div>
      <div>
        <input type="text" onChange={onSubmit} />
        <button onClick={onButton}>Submit</button>
      </div>
      <ul>
        {data1.map(function (a) {
          return (
            <li>
              {a}
              <button>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
