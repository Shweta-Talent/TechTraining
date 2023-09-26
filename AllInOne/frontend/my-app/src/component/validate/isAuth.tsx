import axios from "axios";
import React, { useContext, useEffect, useState ,createContext} from "react";

export const axiosInstance=axios.create({baseURL:'http://localhost:3004/'})

const authContext= createContext<{
    token: string | null;
    setToken: React.Dispatch<React.SetStateAction<string | null>>;
} | null>(null)

export const AuthFunction=({children}:any)=>{
const [token,setToken]= useState(localStorage.getItem("token"))
useEffect(()=>{
    if(token)
    {
        axiosInstance.defaults.headers.common["Authorization"]="Beaer "+token;
       localStorage.setItem("token",token)
    }
    else
    {
        localStorage.removeItem("token")
        delete axiosInstance.defaults.headers.common["Authorization"]
    }
},[token])
const contextValue={token,setToken}
return <authContext.Provider value={contextValue}>{children}</authContext.Provider>
}

export const useAuth=()=>{
return useContext(authContext)
}