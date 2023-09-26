import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom"; 
import '../ProductsList/list.css'
import { axiosInstance } from "../validate/isAuth";
// import ReactSwitch from 'react-switch';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggleValue,setToggleValue] =useState("login")
function handleToggle(){
  setToggleValue(toggleValue)
}
 async function handleSubmit(e:any){
  e.preventDefault()
const result= await axiosInstance.post('Login',{emailId:email,password:password})
console.log(result)
  }

  const navigate = useNavigate();
  return (
    <div>
    
      <Card className="Card" >
        <h3>Login Form</h3>
        <Form>
          <div>
            <input
              type="email"
              placeholder="enter email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            />
          </div>

          <Button style={{margin:25}} onClick={handleSubmit} className="Button" type="submit">
            Login
          </Button>
          <Button onClick={()=>{navigate("/ResetPassword")}}
            className="Button"
            type="submit"
            >
           Reset
          </Button>
        </Form>
      </Card>
    </div>
  );
};
export default Login;
