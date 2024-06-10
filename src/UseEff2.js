import React, { useState, useEffect } from "react";

function UseEff2() {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);

  function handleChange(e) {
    setData(e.target.value);
  }

  function handleClick() {
    setCount(function (prevCount) {
      return prevCount + 1;
    });
  }

  useEffect(
    function () {
      console.log("From Input");
    },
    [data]
  );

  useEffect(
    function () {
      console.log("From button");
    },
    [count]
  );

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>{count}</button>
      <h1>{data}</h1>
    </div>
  );
}

export default UseEff2;
