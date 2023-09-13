import React, { useState, useEffect } from "react";
import axios from "axios";
import { off } from "process";

function ListTalent() {
  const [talent, settalent]: [Array<any>, Function] = useState([]);
  const [offset, setOffset] = useState<number>(0);
  const [limit, setLimit] = useState<number>(1);
  const [totalRecords, setTotalRecords] = useState<number>(0);

  function handleLimit(e:any){
    e.preventDefault(); 
      setLimit(e.target.value)
  }
  function handleOffset(e:any){
    e.preventDefault(); 
    setOffset(e.target.value)
  }
  useEffect(() => {
    async function list() {
      try {

        const response = await axios.post(
          "http://localhost:3005/talent/listtalent",{offset,limit}
        );
          console.log(response.data.results.rows)
        const  talentData = response.data.results.rows;

        settalent([ ...talentData]);
        setTotalRecords(totalRecords);
      } catch (error) {
        console.error("Error fetching talent:", error);
      }
    }

    list();
  }, [offset,limit]);
 

  
    return (
      <div>
            <div>
                <input type="text" placeholder="limit" value={limit} onChange={handleLimit}></input>
                <input type="text" placeholder="limit" value={offset} onChange={handleOffset}></input>
            </div>
       {talent.map((talentItem: any) => (
           <div key={talentItem.talent_id}>
            <p>{talentItem.talent_id}</p>
           <p> {talentItem.first_name}</p>
            <p> {talentItem.last_name}</p>
            <p> {talentItem.email}</p>
            <p>{talentItem.created_date}</p>
            <p>{talentItem.is_active}</p>
             <p>-------------------------</p>
          </div>
        ))}
      </div>
    );
  
}

export default ListTalent;
