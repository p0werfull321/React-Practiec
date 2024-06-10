import React, { useState } from "react";

const FormValidation = () => {
  const [dataerr, setDataerr] = useState(false);
  const [passerr, setPasserr] = useState(false);
  const [radioerr, setRadioerr] = useState(false);

  const [data, setData] = useState("");
  const [pass, setPass] = useState("");
  const [data2, setData2] = useState(false);

  function findLen(e) {
    setData(e.target.value);
  }

  function findLen1(e) {
    setPass(e.target.value);
  }

  function onCheck(e) {
    setData2(e.target.checked);
  }

  function submit(e) {
    e.preventDefault();
    if (data.length < 3 && data[0]) {
      setDataerr(true);
    } else {
      setDataerr(false);
    }
    if (pass.length < 3) {
      setPasserr(true);
    } else {
      setPasserr(false);
    }
    if (data2) {
      setRadioerr(true);
    } else {
      setRadioerr(false);
    }
  }

  return (
    <div>
      <form onSubmit={submit}>
        <label>
          Usernme: <input type="text" onChange={findLen} />{" "}
          {dataerr ? <span>Not valid</span> : null}
          <br />
        </label>
        <label>
          Password: <input type="password" onChange={findLen1} />
          {passerr ? <span>Not valid</span> : null}
        </label>
        <br />
        <input type="radio" onChange={onCheck} />
        <span>Accept terms and condition</span>
        {radioerr ? null : <span>Not valid</span>}
        <br />
        <button type="submit">Submit!</button>
      </form>
    </div>
  );
};

export default FormValidation;
