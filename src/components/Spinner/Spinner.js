import React from "react";
import "./Spinner.css";
const Spinner = props => {
    console.log("SPINNER");
    return (
        <div className="spinner">
            <div className="dot1" />
            <div className="dot2" />
        </div>
    );
}

export default Spinner;
