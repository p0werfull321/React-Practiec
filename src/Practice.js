import React, { useState } from "react";

const options = ["cricket", "football", "hockey"];
const days = ["weekdays", "weekend"];

// print("options" on "days")

const Practice = () => {
  const [data, setData] = useState();
  const [data1, setData1] = useState();

  function selectSport(a) {
    setData(a.target.value);
  }
  function selectDays(a) {
    setData1(a.target.value);
  }

  return (
    <>
      <h1>Sports?</h1>
      {options.map(function (a, b) {
        return (
          <div>
            <label>{a}</label>
            <input type="radio" name="a" value={a} onChange={selectSport} />
          </div>
        );
      })}
      <h1>Days?</h1>
      {days.map(function (a) {
        return (
          <div>
            <label>{a}</label>
            <input type="radio" name="b" value={a} onChange={selectDays} />
          </div>
        );
      })}
      <h1>
        {data} on {data1}
      </h1>
    </>
  );
};

export default Practice;
