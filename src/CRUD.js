import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "./CRUD.css";

const arr = [
  { id: 1, first: "ram", last: "singh", age: 15 },
  { id: 2, first: "raj", last: "sinha", age: 20 },
  { id: 3, first: "shyam", last: "tiwari", age: 30 },
  { id: 4, first: "golu", last: "pandit", age: 45 },
];

const CRUD = () => {
  const [data1, setData1] = useState([]);
  const [first, setfirst] = useState();
  const [last, setLast] = useState();
  const [age, setAge] = useState();
  const [id, setId] = useState();

  useEffect(() => {
    setData1(arr);
  }, []);

  function removeRow(index) {
    let a = data1.filter(function (a, Curr_index) {
      return index !== Curr_index;
    });
    setData1(a);
  }

  function EditRow(index) {
    let a = data1.filter(function (a, Curr_index) {
      return index === Curr_index;
    });
    setfirst(a[0].first);
    setLast(a[0].last);
    setAge(a[0].age);
    setId(a[0].id);
  }

  function updateIndex() {
    let a = data1
      .map(function (val) {
        return val.id;
      })
      .indexOf(id);
    let x = [...data1];
    x[a].first = first;
    x[a].last = last;
    x[a].age = age;
    setData1(x);
  }

  function saveItems() {
    let obj = { id: data1.length + 1, first: first, last: last, age: age };
    let x = [...data1];
    x.push(obj);
    setData1(x);
  }

  return (
    <div>
      <div class="a">
        <label>
          First Name:
          <input
            type="text"
            value={first}
            onChange={(a) => setfirst(a.target.value)}
          />
        </label>
        <label>
          Last Name:{" "}
          <input
            type="text"
            value={last}
            onChange={(a) => setLast(a.target.value)}
          />
        </label>
        <label>
          Age:{" "}
          <input
            type="text"
            value={age}
            onChange={(a) => setAge(a.target.value)}
          />
        </label>
        <button onClick={updateIndex}>Update</button>
        <button onClick={saveItems}>Save</button>
        <br />
        <br />
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data1.map(function (a, index) {
            return (
              <tr key="">
                <td>{a.id}</td>
                <td>{a.first}</td>
                <td>{a.last}</td>
                <td>{a.age}</td>
                <td>
                  <Button
                    onClick={() => EditRow(index)}
                    className="btn btn-primary mr-3"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => removeRow(index)}
                    className="btn btn-danger ml-3"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default CRUD;
