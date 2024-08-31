import React, { createContext, useState } from "react";
import axios from "axios";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [displayLogic, setdisplayLogic] = useState("GET");
  const [data, setData] = useState([])
  


  // fetch the data and encapsulates the array into data variable/state ..  
  const getFunction = async() => {
    try {
      const response = await axios.get("http://localhost:4000/api/message")
      setData(response.data)
    } catch (err) {
      console.log("Something wrong happend")
    }
  };

  return (
    <Context.Provider value={{ displayLogic, setdisplayLogic, getFunction , data , setData }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
