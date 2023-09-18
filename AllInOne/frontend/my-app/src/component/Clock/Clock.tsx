import React, { useEffect, useState } from "react";
import { ClockContainer,ClockText } from "./clockDesign";
function Clock(){

    const [time,setTime] = useState(new Date())

  useEffect(()=>{

    const Interval = setInterval(()=>{
        setTime(new Date())
    })

    return()=>{
        clearInterval(Interval)
    }
  },[1000])

  return (
    <ClockContainer>
    
    <ClockText>🕒   {time.toLocaleTimeString()}</ClockText>
  </ClockContainer>
  );
}

export default Clock;
