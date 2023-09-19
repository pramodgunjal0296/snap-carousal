import React, { useState } from "react";

const Callback = ({ getColor }) => {
  const [activecolor, setActivecolor] = useState();

  const handleChange = (e) => {
    // const { value } = e.target;
    const colorname = e.target.value;
    setActivecolor(colorname);
    getColor(colorname);
  };

  return (
    <div>
      <input
        type="text"
        name="color"
        style={{ padding: "20px", paddingLeft: "40px", paddingRight: "40px" }}
        onChange={handleChange}
        value={activecolor}
        title="Enter color"
      />
    </div>
  );
};

export default Callback;
