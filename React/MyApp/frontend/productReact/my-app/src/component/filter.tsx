import axios from "axios";
import React, { useState } from "react";

function FilterBy(){
 
    const [filterTalentName,setTalentName]:any= useState([])
    const [filterTalentGender,setGender]:any= useState([])
   
    async function filterBYTalentName() {

        const response=await axios.get('http://localhost:3005/talent/filterByActive')
           console.log(response.data)
           setTalentName(response.data.results.rows)
           console.log(setTalentName)
    }

    async function filterByGender() {

        const response=await axios.get('http://localhost:3005/talent/filterByGender')
           console.log(response.data)
           setGender(response.data.results.rows)
           
    }

        return(
            <div>
                    <button onClick={filterBYTalentName}>Filter by TalentName</button>
                  
                    {
                        filterTalentName.map((item:any)=>( <div key={item.talent_id}>
                            <p>{item.talent_id}</p>
                           <p> {item.first_name}</p>
                            <p> {item.last_name}</p>
                            <p> {item.email}</p>
                            <p>{item.created_date}</p>
                            <p>{item.gender}</p>
                            <p>is_active : {item.is_active.toString()}</p>
                             <p>-------------------------</p>
                          </div>))
                    }
                      <button onClick={filterByGender}>Filter by Gender</button>
                      {
                         filterTalentGender.map((item:any)=>( <div key={item.talent_id}>
                            <p>{item.talent_id}</p>
                           <p> {item.first_name}</p>
                            <p> {item.last_name}</p>
                            <p> {item.email}</p>
                            <p>{item.created_date}</p>
                            <p>{item.gender}</p>
                            <p>is_active : {item.is_active.toString()}</p>
                             <p>-------------------------</p>
                          </div>))
                      }
                

            </div>
        )
    
}

export default FilterBy