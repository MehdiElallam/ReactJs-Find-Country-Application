import React from "react";
import { useParams } from "react-router";

function Page1({ match }) {
  const { name, age } = useParams();
  return (
    <div>
      <p>
        Name : {name} | Age : {age}
      </p>
    </div>
  );
}
export default Page1;
