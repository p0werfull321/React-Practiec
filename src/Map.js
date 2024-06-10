import React from "react";

const map = () => {
  const arr = ["param", "ram", "lucky", "Harry"];

  return (
    <div>
      <table>
        <th>Name</th>
        {arr.map(function (a) {
          return (
            <tr key="">
              <td>{a}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default map;
