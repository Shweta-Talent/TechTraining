import axios from "axios";
import React from "react";

function DeleteTalent(){

    async function deleteselected() {
        
        const data=await axios.delete("http://localhost:3005/talent/deletetalent?first_name")
    }
    return(
        <div>
           
        </div>
    )
}