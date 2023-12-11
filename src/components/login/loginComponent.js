import React from "react";
import "./loginComponent.css";
import Button from "../reusable/button";
import Input from "../reusable/input";
import Form from "../reusable/form";
import essuLogoMini from "../../../src/img/essu-logo-mini.png";


const LogInComponent = () => {
  return (
    <div className="background">
      <div className="layer">
        <div className="titleContainer">
          <img src={essuLogoMini} alt="essu-logo"></img>
          <div className="upper">
            <h1>
              Intitutional Planning <br></br>and Development Office
            </h1>
            <h2>Excellence • Accountability • Service</h2>
          </div>
        </div>
        <div className="container">
          <Form>
            <Input type="email" placeholder="Email" required />
            <Input type="password" placeholder="Password" required />
            <Button type="button" btncolor="green">
              <h2>Log In</h2>
            </Button>
            <a href="/login">Forgot password?</a>
            <div className="line"></div>
            <Button type="button" btncolor="grey">
              <h2>Create Account</h2>
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LogInComponent;
