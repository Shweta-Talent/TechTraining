import axios from "axios";
import "./login.css"
import React, { useState } from "react";
import { axiosInstance, useAuth } from "./auth";
import "../App.css"

function Login() {
    const auth=useAuth()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [darktheme,setdarktheme]=useState(false)

  

  function handleEmail(e: any) {
    setEmail(e.target.value);
  }

 function handlePassword(e:any){
    setPassword(e.target.value)
 }


 async function handleSubmit(e:any){
    e.preventDefault(); 
   try{
    const response = await axiosInstance.post('/login', { email, password });
    console.log(response.data)
    auth?.setToken(response.data.token)
   }catch(err){
        console.log(err)
   }
 }

 

  return (
   <div className="login">
   

      <form onSubmit={handleSubmit} className="login-form">
        <label>Enter Email</label>
      <input 
          type="email"
          placeholder="email"
          value={email}
          onChange={handleEmail}
        />

<label>Enter Password</label>
      <input 
          type="password"
          placeholder="password"
          value={password}
          onChange={handlePassword}
        />
        <button type="submit" >Login</button>
      </form>
    </div>
  );
}

export default Login ;
