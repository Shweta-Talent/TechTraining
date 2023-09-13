import axios from "axios";

import React, { useState ,useEffect, useRef} from "react";

function UseStateHook(){
const [sortprojectname,setsortprojectname]:any= useState([])
const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
    async function SortProjectname() {
        const response=await axios.get(`http://localhost:3005/project/sortByprojectName`)
        setsortprojectname(response.data.rows)
    }

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((data) => {
            setData(data);
            setLoading(false);
          });
      }, []);

    return(
        <div>
            <button onClick={SortProjectname}>Sort by projectname</button>
            {
                sortprojectname.map((project:any)=>(<div key={project.project_id}>
                   {project.project_name}<br></br>
                </div>))
            }
             <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((post:any) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
        </div>

    )
}


function focusOnInput() {
  const inputRef:any = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button  onClick={focusInput}>Focus Input</button>
    </div>
  );
}











export { UseStateHook,focusOnInput}
 