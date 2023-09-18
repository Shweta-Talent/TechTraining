import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './convert.css'


function UnitConverter(){

    interface Units {
        [key: string]: number;
      }
   const  units:Units ={
    meters: 1,
    centimeter: 100,
    kilometer: 0.001,
    feet: 3.28084, 
    yards: 1.09361,
    miles: 0.000621371,
    }
    const [input, setInput] = useState<string>("");
    const [fromUnit, setFromUnit] = useState<keyof Units>("meters");
    const [toUnit, setToUnit] = useState<keyof Units>("centimeter");
    const [convertedValue, setConvertedValue] = useState<number | null>(null);
    function handleConvert(){
        const floatValue =parseFloat(input)
        if(floatValue){
            const conversionFactor = units[toUnit] / units[fromUnit];
      const result = floatValue * conversionFactor;
      setConvertedValue(result)
        }else{
            setConvertedValue(null);
        }
    }
    return(
        <Card className="Card">
        <div className="inputContainer">
                <div>
                <input  className="textInput" type="text" onChange={(e:any)=>setInput(e.target.value)} value={input}></input>
                </div>
               <select className="selectInput" value={fromUnit} onChange={(e:any)=>setFromUnit(e.target.value)}>
                {
                    Object.keys(units).map((item:any,index:any)=>(
                        <option key={index} value={item}>
                                {item}
                        </option>
                    ))
                }
               </select>
               to
               <select className="selectInput" value={toUnit} onChange={(e:any)=>setToUnit(e.target.value)}>
               {
                    Object.keys(units).map((item:any,index:any)=>(
                        <option key={index} value={item}>
                                {item}
                        </option>
                    ))
                }
               </select>
        </div><div>

              <Button className="convertButton" onClick={handleConvert}>Convert
              </Button>
        </div>
        <div className="resultText">
            {convertedValue !== null && (
             <p>
                {input} {fromUnit} is equal to {convertedValue} {toUnit}
             </p>
            )}
        </div>
        </Card>
    )
}
export default UnitConverter
