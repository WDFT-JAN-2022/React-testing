import React from "react";

const ColorList = () => {
  const defaultColors = ["red", "blue", "yellow", "green", "orange", "purple"];
  const [colorArr, setColorArr] = React.useState(defaultColors);
  const [newColor, setNewColor] = React.useState("");
  const [ascending, setAscending] = React.useState(true);

  const removeColor = (colorToRemove) => {
    let filteredArray = colorArr.filter((color) => {
      return color !== colorToRemove;
    });
    setColorArr(filteredArray);
  };

  const addColor = () => {
    let doesExist = colorArr.includes(newColor);
    if (!doesExist) {
      setColorArr(colorArr.concat(newColor));
      setNewColor("");
    }
  };

  const orderAlphabetically = () => {
    //clone array w/ spread operator
    //sort the cloned array alphabetically
    //setColorArray with sorted array

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
      <button onClick={orderAlphabetically}>
        Order Alphabetically ({ascending ? "ascending" : "descending"})
      </button>
      {colorArr.map((color) => {
        return (
          <div
            key={color}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p style={{ color: color }}>{color}</p>
            <button onClick={() => removeColor(color)}>remove</button>
          </div>
        );
      })}
      <label htmlFor="colorInput">Add Color</label>
      <input
        name="colorInput"
        onChange={(e) => setNewColor(e.target.value)}
        value={newColor}
      />
      <button onClick={addColor}>Add</button>
    </div>
  );
};

export default ColorList;
