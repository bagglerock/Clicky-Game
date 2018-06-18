import React from "react";
import "./Count.css";

const Count = props => (
  <div className="count-section">
      <h3>{props.count}</h3>
  </div>
);

export default Count;
