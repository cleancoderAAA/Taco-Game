import React from "react";
import "./WrappedButton.css";

const WrappedButton = (props) => {
    
    return (
        <button className="btn" style={props.buttonStyle} >
            <span style={props.iconStyle}>{props.icon}</span>
            <span style={props.textStyle}>{props.text}</span>
        </button>
    )
}

export default WrappedButton;