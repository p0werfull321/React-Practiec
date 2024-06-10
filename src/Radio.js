import React, { useState } from "react";

function Radio() {
  let [data, setData] = useState(false);

  function trueCheck(e) {
    setData(e.target.value);
  }

  return (
    <div>
      <label>
        <input type="radio" value="Yes" name="a" onChange={trueCheck} />
        Yes
      </label>
      <br />
      <label>
        <input type="radio" value="No" name="a" onChange={trueCheck} />
        No
      </label>
      {data === "Yes" && <h1>"YES"</h1>}
    </div>
  );
}

export default Radio;
