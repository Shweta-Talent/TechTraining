import axios from "axios";
import { log } from "console";
import React, { createContext, useContext, useEffect, useState } from "react";
export const axiosInstance = axios.create({baseURL:'http://localhost:3005/'});

const auth= createContext<{
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>
} | null >(null);

export const AuthFunction = ({ children }: any) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  useEffect(() => {
    if (token) {
      axiosInstance.defaults.headers.common["Authorization"] = "Bearer " + token;
      console.log(token)
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
      delete axiosInstance.defaults.headers.common["Authorization"];
    }
  }, [token]);

  const contextValue = { token, setToken };
  return <auth.Provider value={contextValue}>{children}</auth.Provider>;
};

export const useAuth = () => {
  return useContext(auth);
};
