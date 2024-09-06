import React, { useContext } from "react";
import Context from "../Stores/contextProvider";
import Sidebar from "./Sidebar";
import InnerDiv from "./InnerDiv";
import Logregstate from "./Logregstate";


const AuthenticationDis = () => {
  const { isAuthenticated } = useContext(Context);

  return isAuthenticated ? (
    <div className="container row mainCont mt-5 p-3">
      <Sidebar />
      <div className="displayContainer col-8 p-3 ">
        <InnerDiv />
      </div>
    </div>
  ) : (
    <div className="reglog container mt-5 ">
      <Logregstate />
    </div>
  );
};

export default AuthenticationDis;
