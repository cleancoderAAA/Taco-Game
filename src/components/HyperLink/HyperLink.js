import React from 'react';
import "./HyperLink.css";

const HyperLink = (props) => {

    return (
        <a href={props.to} target={props.target} className="btn" style={props.buttonStyle}>
            <img src={props.imgURL} className="img" style={props.imgStyle} alt={props.text}/>
            <span className="" style={props.textStyle} >{props.text}</span>
        </a>
    )
}

export default HyperLink;