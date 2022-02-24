import React from "react";
import ColorListItem from "./ColorListItem";
import AddNewColor from "./AddNewColor";
import OrderColors from "./OrderColors";
import ColorMap from "./ColorMap";
import SearchColors from "./SearchColors";

const ColorList = () => {
  const defaultColors = ["red", "blue", "yellow", "green", "orange", "purple"];
  const [colorArr, setColorArr] = React.useState(defaultColors);
  const [searchColors, setSearchColors] = React.useState(colorArr);
  const [searchText, setSearchText] = React.useState("");
  const [ascending, setAscending] = React.useState(true);

  React.useEffect(() => {
    let searchProducts = colorArr.filter((color) => {
      return color.includes(searchText);
    });

    setSearchColors(searchProducts);
  }, [searchText, colorArr]);

  React.useEffect(() => {
    console.log("We are now searching by ", ascending);
  }, [ascending]);

  const removeColor = (colorToRemove) => {
    let filteredArray = colorArr.filter((color) => {
      return color !== colorToRemove;
    });
    setColorArr(filteredArray);
  };

  const orderAlphabetically = () => {
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

  // let searchProducts = colorArr.filter((color) => {
  //   return color.includes(searchText);
  // });

  return (
    <div>
      <h2>All Colors</h2>
      <SearchColors searchText={searchText} setSearchText={setSearchText} />
      <OrderColors
        ascending={ascending}
        orderAlphabetically={orderAlphabetically}
      />
      <ColorMap colorArr={searchColors} removeColor={removeColor} />
      <AddNewColor colorArr={colorArr} setColorArr={setColorArr} />
    </div>
  );
};

export default ColorList;
