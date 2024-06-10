import React, { useEffect, useState } from "react";

const UseEff = () => {
  const [data, setData] = useState(false);

  function onSub() {
    setData(true);
  }
  function onSub1() {
    setData(false);
  }

  useEffect(() => {
    if (data === true) console.log("Test");
  }, [data]);

  return (
    <div>
      <button onClick={onSub}>Click!!!!</button>
      <button onClick={onSub1}>Click!!!!</button>
    </div>
  );
};

export default UseEff;
