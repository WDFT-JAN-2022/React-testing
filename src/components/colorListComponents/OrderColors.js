import React from "react";

const OrderColors = (props) => {
  return (
    <button onClick={props.orderAlphabetically}>
      Order Alphabetically ({props.ascending ? "ascending" : "descending"})
    </button>
  );
};

export default OrderColors;
