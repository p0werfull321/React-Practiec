import React, { useState } from "react";

const countries = [
  { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
  { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
  { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] },
];

const Struct = () => {
  const [data, setData] = useState();

  function showData(e) {
    setData(e.target.value);
  }

  return (
    <div>
      <select name="Countries" id="Countries" onChange={showData}>
        {countries.map(function (a, index) {
          return (
            <option value={index} key="">
              {a.name}
            </option>
          );
        })}
      </select>
      <select>
        {countries[data] &&
          countries[data].cities.map(function (a) {
            return (
              <option value="" key="">
                {a}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default Struct;
