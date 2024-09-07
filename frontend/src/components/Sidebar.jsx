import React, { useContext, useEffect } from "react";
import Context from "../Stores/contextProvider";

const Sidebar = () => {
  const { setdisplayLogic, getFunction , displayLogic , setIsAuthenticated , setToken } = useContext(Context);

  const logutLogic = ()=>{
    setIsAuthenticated(false)
    setToken("")
    localStorage.removeItem('token')
  }

  return (
    <div className="d-grid gap-2 col-4 mx-auto">
      <hr />
      <button
        className="btn btn-outline-dark"
        type="button"
        onClick={() => setdisplayLogic("GET")}
      >
        GET
      </button>
      <button
        className="btn btn-outline-dark"
        type="button"
        onClick={() => setdisplayLogic("POST")}
      >
        POST
      </button>
      <hr />

      <button
        className="btn btn-primary"
        type="button"
        onClick={logutLogic}
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
