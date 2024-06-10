import React, { useState } from "react";

const Test = () => {
  const [data, setData] = useState(null);
  const [data1, setData1] = useState([]);

  function onSubmit(e) {
    setData(e.target.value);
  }
  function onButton() {
    setData1([...data1, data]);
  }
  function fetchIndex(index) {
    let val = data1.filter(function (a, curr_index) {
      return curr_index !== index;
    });
    setData1(val);
  }
  return (
    <div>
      <div>
        <input type="text" onChange={onSubmit} />
        <button onClick={onButton}>Submit</button>
      </div>
      <ul>
        {data1.map(function (a, index) {
          return (
            <li>
              {a}
              <button onClick={() => fetchIndex(index)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Test;
