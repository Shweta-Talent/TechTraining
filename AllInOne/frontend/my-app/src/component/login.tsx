import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./login.css";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmail(e: any) {
    setEmail(e.target.value);
  }
  function handlePassword(e: any) {
    setPassword(e.target.value);
  }

  return (
    <div>
      <Card className="Card">
        <h3>Login Form</h3>
        <Form>
          <div>
            <input
              type="email"
              placeholder="enter email"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={handlePassword}
            />
          </div>

          <Button className="Button" type="submit">
            Login
          </Button>
          <Button
            className="Button"
            type="submit"
            >
           Rest
          </Button>
        </Form>
      </Card>
    </div>
  );
};
export default Login;
