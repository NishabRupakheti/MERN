import React from "react";
import Sidebar from "./Components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ContextProvider } from "./Stores/contextProvider";
import InnerDiv from "./components/InnerDiv";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Logregstate from "./components/Logregstate";
import AuthenticationDis from "./components/AuthenticationDis";

const App = () => {
  return (
    <ContextProvider>
        <AuthenticationDis/>
    </ContextProvider>
  );
};

export default App;
