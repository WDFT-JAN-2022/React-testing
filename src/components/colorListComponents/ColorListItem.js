import React from "react";

const ColorListItem = (props) => {
  return (
    <div className="color-list-item">
      <p style={{ color: props.color }}>{props.color}</p>
      <button onClick={() => props.removeColor(props.color)}>remove</button>
    </div>
  );
};

export default ColorListItem;
