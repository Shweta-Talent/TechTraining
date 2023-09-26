import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Navigate, useNavigate } from "react-router-dom";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitEnable, setIsSubmitEnable] = useState(false);

  const [passwordErrors, setPasswordErrors] = useState<string[]>([]);
  const [emailError, setEmailError] = useState<string | null>(null);

  const navigate=useNavigate()
  function handleBack() {
   navigate("/")
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    if (password !== confirmPassword && password.length > 0) {
      alert("Password is not equal to confirm password!");
    }
  }

  useEffect(() => {
    const newErrors: string[] = [];

  
    if (email.length === 0 && document.activeElement === emailInputRef.current) {
      setEmailError("Email is required");
    } else {
      setEmailError(null);
    }

   
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;

    if (!/[A-Z]/.test(password)) {
      newErrors.push("At least one capital letter");
    }
    if (!/[a-z]/.test(password)) {
      newErrors.push("At least one lowercase letter");
    }
    if (!/[\W_]/.test(password)) {
      newErrors.push("At least one special character");
    }
    if (!/\d/.test(password)) {
      newErrors.push("At least one number");
    }
    if (password.length < 8) {
      newErrors.push("At least 8 characters");
    }

    setPasswordErrors(newErrors);

    if (password === confirmPassword && passwordPattern.test(password)) {
      setIsSubmitEnable(true);
    } else {
      setIsSubmitEnable(false);
    }
  }, [password, confirmPassword, email]);

  const emailInputRef = React.createRef<HTMLInputElement>();

  return (
    <div>
      <Card className="Card">
        <h3>Reset Password</h3>
        <Form>
          <div>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              ref={emailInputRef}
              onChange={(e: any) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            {emailError && <div className="error-message">{emailError}</div>}
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter new password"
              value={password}
              onChange={(e: any) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div>
            {passwordErrors.map((message, index) => (
              <div key={index} className="error-message">
                {message}
              </div>
            ))}
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e: any) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </div>

          <Button className="Button" type="submit" onClick={handleBack}>
            Back
          </Button>
          <Button
            className="Button"
            type="submit"
            onClick={handleSubmit}
            disabled={!isSubmitEnable}
          >
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default ResetPassword;
