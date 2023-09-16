

import { useNavigate } from "react-router-dom"; 
import React, { createContext, useState, useContext } from "react";
const cartContext= createContext<any>(undefined);
export function CartProvider({children}:{children: React.ReactNode}){

const [cart,setCart]=useState<any>([])
const navigate = useNavigate();

const addToCart=(item:any)=>{
    setCart([...cart,item])
    navigate("/Cart")
}
return(
<cartContext.Provider value={{cart,addToCart}}>{children}</cartContext.Provider>
)
}

export function useCart(){
    return useContext(cartContext)
}

export default CartProvider