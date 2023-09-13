import { Navigate } from "react-router-dom";
import { useAuth} from "./auth";

export const ProtectedRoute=({children}:any)=>{
    const token =useAuth()?.token

    if(!token) return <Navigate to={"/"}/>;
    else
    return <>{children}</>
}