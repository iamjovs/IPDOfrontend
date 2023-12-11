import React from "react";
import "./reusable.css";

const Form = (props) => {
    return (
        <form>{props.children}</form>
    );
}

export default Form;
