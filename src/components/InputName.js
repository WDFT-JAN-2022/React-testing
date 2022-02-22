import React from "react";

const InputName = () => {
  const [name, setName] = React.useState("");

  return (
    <div>
      <h4>Hello, {name}</h4>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        name="nameInput"
      />
    </div>
  );
};

export default InputName;
