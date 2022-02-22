import React from "react";

const RandomNumber = () => {
  let randomNumber = Math.floor(Math.random() * 100);
  return <p>Your Lucky number is {randomNumber}</p>;
};

export default RandomNumber;
