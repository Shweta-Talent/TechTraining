import React, { useState } from "react";

function FormProject() {
    const [projectname,setprojectname]=useState("")
    const [createby,setcreateby]=useState("")
    const [projectdescription,setprojectdescription]=useState("")

  const handleprojectname=(e:any)=>{
      setprojectname(e.target.value)
      
    }
    const handleprojectdesc=(e:any)=>{
      setprojectdescription(e.target.value)
      
    }
   
    const handlecreateby=(e:any)=>{
      setcreateby(e.target.value)
      
    }

    
     
    const handleClick=(e:any)=>{
       e.preventDefault();
       console.log(projectname)
       console.log(projectdescription)
       console.log(createby)

    }
  return (

    <>
      <div>
        <form className="form" onSubmit={handleClick}>
          <label>project name</label>
          <input type="text" placeholder="Project name" value={projectname} onChange={handleprojectname}></input>

           <label>project description</label>
          <input type="text" placeholder="project description" value={projectdescription} onChange={handleprojectdesc}></input>

          <label>createby</label>
          <input type="text" placeholder="createby" value={createby} onChange={handlecreateby}></input> 

    
        <input type="submit" placeholder="submit" ></input>
        </form>
      </div>
    </>
  );
}

export default FormProject ;
