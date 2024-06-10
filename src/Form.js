import React, {useState} from 'react'

function Form() {
  const [data, setData] = useState(null)
  const [data1, setData1] = useState(null)
  const [data2, setData2] = useState(false)

  function change(e){
    setData(e.target.value);
  }
  function onDrop(e){
    setData1(e.target.value);
  }
  function onRadio(e) {
    setData2(e.target.checked);
  }
  function onForm(e){
    e.preventDefault();
    console.log(data, data1, data2)
  }

  return (
    <div>
        <form onSubmit={onForm}>
            <input type='text' onChange={change} />
            <select name="cars" id="cars" onChange={onDrop}>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
            <input type='radio'  onChange={onRadio} />
            <button>Submit</button>
        </form>
        <br/><br/>
        <h1>{data}</h1>
        <h1>{data1}</h1>
        <h1>{data2}</h1>
    </div>
  )
}

export default Form
