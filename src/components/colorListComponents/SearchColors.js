import React from "react";

const SearchColors = (props) => {
  return (
    <div>
      <input
        type="text"
        placeholder="search colors"
        value={props.searchText}
        onChange={(e) => props.setSearchText(e.target.value)}
      />
    </div>
  );
};

export default SearchColors;
