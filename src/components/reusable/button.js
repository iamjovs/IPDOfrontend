import React from "react";
import "./reusable.css";

const Button = (props) => {
    return (
        <button type={props.type} className={props.btncolor} onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default Button;