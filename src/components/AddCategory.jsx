import React, { useState } from "react";
import PropTypes from "prop-types";
const AddCategory = ({ setCategories }) => {
  const [input, setInput] = useState("");
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim().length > 2) {
      setCategories((items) => [input, ...items]);
      setInput("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>{input}</p>
      <input type="text" onChange={handleInputChange} value={input} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
export default AddCategory;
