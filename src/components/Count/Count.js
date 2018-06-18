import React from "react";
import "./Count.css";

const Count = props => (
    <div>
        <div className="count-section">
            <h3>Current Streak: {props.count}</h3>
        </div>
        <div className="count-section">
            <h3>Longest Streak: {props.streak}</h3>
        </div>
    
    
    </div>


);

export default Count;
