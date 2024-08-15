import React, { useContext, useEffect } from "react";
import Context from "../Stores/contextProvider";

const Sidebar = () => {
  const { setdisplayLogic, getFunction , displayLogic } = useContext(Context);

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
    </div>
  );
};

export default Sidebar;
