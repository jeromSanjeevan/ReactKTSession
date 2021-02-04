import React from "react";

// function Greet() {
//   return <h1>Hello Jerom, This is a test Functional components</h1>;
// }

const Greet = (props) => {
  console.log(props);
  return <h1>Hello, this is a test functional Component {props.name}</h1>;
};

export default Greet;
