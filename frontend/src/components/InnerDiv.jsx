import React, { useContext } from "react";
import Context from "../Stores/contextProvider";
import PostCompo from "./PostCompo";
import GetCompo from "./GetCompo";

const InnerDiv = () => {
  const { displayLogic } = useContext(Context);

  return (
    <>
      {displayLogic === "GET" ? <GetCompo /> : <PostCompo />}
    </>
  );
};

export default InnerDiv;
