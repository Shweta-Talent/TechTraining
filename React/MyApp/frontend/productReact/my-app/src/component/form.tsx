import { log } from "console";
import React, { useState } from "react";

function Formtalent (){
const [firstname,setfirstname]=useState("")
const [lastname,setlastname]=useState("")

function handleform(){
  
}
    return (
        <div>
          <form className='form'>
          <label  >talent firstname</label>
        <input type='text' placeholder='firstname'  value={firstname} onChange={e=>setfirstname(e.target.value)} ></input>
        <label  >talent lastname</label>
        <input type='text' placeholder='lastname' value={lastname} onChange={e=>setlastname(e.target.value)}></input>
       
        <input type="submit" placeholder="submit" onClick={handleform}></input>
      </form>
        </div>
    )
}

export default Formtalent