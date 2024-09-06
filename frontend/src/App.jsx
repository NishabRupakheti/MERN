import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ContextProvider } from "./Stores/contextProvider";
import AuthenticationDis from "./components/AuthenticationDis";

const App = () => {
  return (
    <ContextProvider>
        <AuthenticationDis/>
    </ContextProvider>
  );
};

export default App;
