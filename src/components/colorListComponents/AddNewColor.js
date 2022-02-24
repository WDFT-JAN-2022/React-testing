import React from "react";

const AddNewColor = (props) => {
  const [newColor, setNewColor] = React.useState("");

  const addColor = () => {
    let doesExist = props.colorArr.includes(newColor);
    if (!doesExist) {
      props.setColorArr(props.colorArr.concat(newColor));
      setNewColor("");
    }
  };

  return (
    <div>
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

export default AddNewColor;
