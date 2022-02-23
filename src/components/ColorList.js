import React from "react";
import ColorListItem from "./ColorListItem";
import AddNewColor from "./AddNewColor";
import OrderColors from "./OrderColors";
import ColorMap from "./ColorMap";

const ColorList = () => {
  const defaultColors = ["red", "blue", "yellow", "green", "orange", "purple"];
  const [colorArr, setColorArr] = React.useState(defaultColors);
  const [ascending, setAscending] = React.useState(true);

  const removeColor = (colorToRemove) => {
    let filteredArray = colorArr.filter((color) => {
      return color !== colorToRemove;
    });
    setColorArr(filteredArray);
  };

  const orderAlphabetically = () => {
    console.log("CALLING");
    let arrayCopy = [...colorArr];
    if (ascending) {
      //ascending
      arrayCopy.sort((a, b) => a.localeCompare(b));
    } else {
      //descending
      arrayCopy.sort((a, b) => b.localeCompare(a));
    }
    setColorArr(arrayCopy);
    setAscending(!ascending);
  };

  return (
    <div>
      <h2>All Colors</h2>
      <OrderColors
        ascending={ascending}
        orderAlphabetically={orderAlphabetically}
      />
      <ColorMap colorArr={colorArr} removeColor={removeColor} />
      <AddNewColor colorArr={colorArr} setColorArr={setColorArr} />
    </div>
  );
};

export default ColorList;
