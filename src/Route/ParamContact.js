import React from "react";
import { useParams } from "react-router-dom";

const ParamContact = () => {
  const params = useParams();
  const { name } = params;
  return (
    <div>
      <h1>{name}Contact: 9453016215</h1>
      <h1>{name}Contact: 9876543210</h1>
    </div>
  );
};

export default ParamContact;
