import React from "react";
import { useLocation } from "react-router";

function Page2() {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <p>Welcome to page 2</p>
    </div>
  );
}
export default Page2;
