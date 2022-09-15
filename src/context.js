import React, { useContext, useEffect, useState } from "react";

export const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(()=>{
    localStorage.setItem("darkMode", JSON.stringify(darkTheme));
  },[darkTheme])

  return (
    <AppContext.Provider value={{ darkTheme, setDarkTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext= ()=> {
  return useContext(AppContext);
}

export default AppProvider;
