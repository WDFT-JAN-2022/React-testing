import React from "react";
import ColorListItem from "./ColorListItem";

const ColorMap = (props) => {
  return (
    <div>
      {props.colorArr.map((color) => {
        return (
          <ColorListItem
            color={color}
            removeColor={props.removeColor}
            key={color}
          />
        );
      })}
    </div>
  );
};

export default ColorMap;
