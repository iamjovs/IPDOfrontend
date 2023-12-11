import React from "react";
import "./reusable.css";

const Input = (props) => {
    return (
        <input name={props.name} placeholder={props.placeholder}/>
    );
};

export default Input;