import React from "react";

import "./TextBox.css";

const TextBox = props => {
  return (
    <input
      type="text"
      className="textBox"
      id={props.name}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      maxLength={props.maxLength}
    />
  );
};

export default TextBox;
