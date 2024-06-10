import React, { useState } from "react";

function Categories() {
  const [data, setData] = useState(null);

  function onCar(e) {
    setData(e.target.value);
  }

  return (
    <div>
      <select name="cars" id="cars" onChange={onCar}>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
      {(data === "volvo" || data === "mercedes") && (
        <select name="Engine" id="cars" onChange={onCar}>
          <option value="piston">piston</option>
          <option value="water">water</option>
        </select>
      )}
      {(data === "saab" || data === "audi" )&& () 
          <select name="color" id="cars" onChange={onCar}>
            <option value="green">green</option>
            <option value="red">red</option>
          </select>
        )}
    </div>
  );
}

export default Categories;
