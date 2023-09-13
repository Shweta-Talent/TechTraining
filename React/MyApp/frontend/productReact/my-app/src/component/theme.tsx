import React, { createContext, useContext, useState } from 'react';

 const Mycontext =createContext<{ theme: string; toggleTheme: () => void; }| null>(null)

export const ContextProvide = ({children}: {children:any}) => {

  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

    const [theme, setTheme] = useState(prefersDarkMode ? "dark" : "light");

    const toggleTheme = () => {
      setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };

    return(
            <Mycontext.Provider value={{theme,toggleTheme}}>
                {children}
            </Mycontext.Provider>
    )
}

export const ThemeContext =()=>{
return useContext(Mycontext)
}