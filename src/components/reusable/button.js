import React from "react";
import "./reusable.css";

const Button = (props) => {
    return (
        <button type={props.type} className={props.btncolor}>
            {props.children}
        </button>
    );
};

export default Button;