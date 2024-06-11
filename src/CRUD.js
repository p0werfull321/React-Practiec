import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const arr = [
  { id: 1, first: "ram", last: "singh", age: 15 },
  { id: 2, first: "raj", last: "sinha", age: 20 },
  { id: 3, first: "shyam", last: "tiwari", age: 30 },
  { id: 4, first: "golu", last: "pandit", age: 45 },
];

const CRUD = () => {
  const [data, setData] = useState();
  const [data1, setData1] = useState([]);

  useEffect(() => {
    setData1(arr);
  }, []);

  function removeRow(index) {
    let a = data1.filter(function (a, Curr_index) {
      return index !== Curr_index;
    });
    setData1(a);
  }

  return (
    <div>
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
                  <Button className="btn btn-primary mr-3">Edit</Button>
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
