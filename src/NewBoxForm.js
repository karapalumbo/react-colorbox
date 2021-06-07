import React, { useState }from "react";


const NewBoxForm = ({ createBox }) => {
  const INITIAL_STATE = {     
    backgroundColor: "",
    width: "",
    height: "" };
        
  const [formData, setFormData] = useState(INITIAL_STATE);


  const handleSubmit = evt => {
    evt.preventDefault();
    createBox(formData);
    setFormData(INITIAL_STATE);
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="backgroundColor">BackgroundColor:</label>
      <input
        id="backgroundColor"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      />

      <label htmlFor="width">Width:</label>
      <input
        type="number"
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />

      <label htmlFor="height">Height:</label>
      <input
        type="number"
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />

      <button>Add a new box!</button>
    </form>
  );
};

export default NewBoxForm;