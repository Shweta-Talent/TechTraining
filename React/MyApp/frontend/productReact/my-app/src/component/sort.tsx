import axios from "axios";
import exp from "constants";
import React, { useState } from "react";

function SortProject(){
const [sortprojectname,setsortprojectname]:any= useState([])
const [SortCreateby,setsortcreateby]:any= useState([])
    async function SortProjectname() {
        const response=await axios.get(`http://localhost:3005/project/sortByprojectName`)
        setsortprojectname(response.data.rows)
    }

    
            async function Sortcreateby() {
                const response=await axios.get(`http://localhost:3005/project/sortBycreateby`)
              setsortcreateby(response.data.rows)
            }

    return(
        <div>
            <button onClick={SortProjectname}>Sort by projectname</button>
            {
                sortprojectname.map((project:any)=>(<div key={project.project_id}>
                   {project.project_name}<br></br>
              {project.project_id}<br></br>
              {project.createdby}<br></br>
              {project.createdat}<br></br>
              {project.project_description}<br></br>
              <br></br>
              <br></br>
                </div>))
            }

<button onClick={Sortcreateby}>Sort by createdby</button>
            {
                SortCreateby.map((project:any)=>(<div key={project.project_id}>
                   {project.project_name}<br></br>
              {project.project_id}<br></br>
              {project.createdby}<br></br>
              {project.createdat}<br></br>
              {project.project_description}<br></br>
              <br></br>
              <br></br>
                </div>))
            }

           
        </div>
    )
}

export default SortProject