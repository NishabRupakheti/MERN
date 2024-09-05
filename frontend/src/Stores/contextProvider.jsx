import React, { createContext, useState } from "react";
import axios from "axios";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [displayLogic, setdisplayLogic] = useState("GET");
  const [data, setData] = useState([])
  
  const [isLoggedIn , setIsloggedIn] = useState(false)

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const changeLogState = ()=>{
    setIsloggedIn(!isLoggedIn)
  }

  // fetch the data and encapsulates the array into data variable/state ..  
  const getFunction = async() => {
    try {
      const response = await axios.get("http://localhost:4000/api/message")
      setData(response.data)
    } catch (err) {
      console.log("Failed to fetch the data", err)
    }
  };

  return (
    <Context.Provider value={{ displayLogic, setdisplayLogic, getFunction , data , setData , isLoggedIn , setIsloggedIn , changeLogState , isAuthenticated, setIsAuthenticated }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
