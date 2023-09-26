import React from "react";
import { useAuth } from "./isAuth";
import { Navigate, useNavigate } from "react-router-dom";


 const IsLogin=({children}:any)=>{
        const token=useAuth()?.token

        if(token)return <>{children}</>
        else return<Navigate to='/Unauthorized'></Navigate>
}

export default IsLogin