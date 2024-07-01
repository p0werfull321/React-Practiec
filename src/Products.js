import React, { useState } from "react";

function App() {
  const [data, setData] = useState(["circket", "football", "hockey"]);
  const [item, setItems] = useState([]);

  const del = (i) => {
    const res = data.filter((a, index) => i !== index);
    setData(res);
  };

  const box = (i) => {
    const checkeditems = [...item];

    if (checkeditems.includes(i)) {
      checkeditems.splice(checkeditems.indexOf(i), 1);
    } else {
      checkeditems.push(i);
    }
    setItems(checkeditems);
  };

  return (
    <div className="App">
      {data.map((a, i) => (
        <div>
          <input
            type="checkbox"
            checked={item.includes(i)}
            onChange={() => box(i)}
          />
          {a}
          {item.includes(i) && <button onClick={() => del(i)}>delete</button>}
        </div>
      ))}
    </div>
  );
}
export default App;
