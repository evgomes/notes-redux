import React from "react";

import "./TextArea.css";

const TextArea = props => {
  return (
    <textarea
      className="textArea"
      id={props.name}
      name={props.name}
      cols={props.cols}
      rows={props.rows}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default TextArea;
