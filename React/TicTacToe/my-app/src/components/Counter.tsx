import React, { useEffect, useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [data,setdata]=useState({})
//   const [filterData,setFilter]=useState([])
  const handleCount = () => {
    setCounter(counter + 1);
    
  };
  useEffect(() => {
    async function fetchdata() {
      try {
        const res = await fetch("http://hn.algolia.com/api/v1/search?query=foo&tags=story");
        const json= await res.json();
        setdata(json)
      console.log(json)
    
    
        
      } catch (error) {
        console.log(error);     
      }
    }
    fetchdata()

  },[counter])
    

  return (
    <div>
      <button onClick={handleCount}>Click</button>
      <h1>{counter} </h1>
     {/* <div>
        {data.map((item:any)=>{
            return <h2>{item.title}</h2>})}
     </div> */}
{/* <h1> {data}</h1> */}
    
   
     
    </div>
  );
}

export default Counter;
