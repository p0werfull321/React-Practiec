import React, { useState } from "react";

function DropdownQz() {
  const [data, setData] = useState(false);
  const [data1, setData1] = useState(false);
  const [data2, setData2] = useState(null);

  function onUnder(e) {
    setData(e.target.value);
  }
  function onPost(e) {
    setData1(e.target.value);
  }
  function onDrop(e) {
    setData2(e.target.value);
  }

  return (
    <div>
      <div>
        <h1>Undergrad?</h1>
        <label>
          <input type="radio" value="Yes" name="a" onChange={onUnder} />
          Yes
        </label>
        <br />
        <label>
          <input type="radio" value="No" name="a" onChange={onUnder} />
          No
        </label>
        {data === "Yes" && (
          <div>
            <h1>Postgrad?</h1>
            <label>
              <input type="radio" value="Yes" name="b" onChange={onPost} />
              Yes
            </label>
            <br />
            <label>
              <input type="radio" value="No" name="b" onChange={onPost} />
              No
            </label>
            {data1 === "Yes" && (
              <div>
                <select name="cars" id="cars" onChange={onDrop}>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
                <h1>{data2}</h1>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default DropdownQz;
