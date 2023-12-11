import React, { useState } from "react";
import "./loginComponent.css";
import Button from "../reusable/button";
import Input from "../reusable/input";
import Form from "../reusable/form";
import essuLogoMini from "../../../src/img/essu-logo-mini.png";

const LogInComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.error || "Login failed");
      }

      const data = await response.json();

      console.log("Login successful:", data);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

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
            <Input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="button" btncolor="green" onClick={handleLogin}>
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
