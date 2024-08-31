import React, { useContext, useEffect, useState } from "react";
import Context from "../Stores/contextProvider";
import axios from "axios";
import NoDTA from "./NoDTA";
import { FaRegEdit } from "react-icons/fa";

const GetCompo = () => {
  const { data, getFunction } = useContext(Context);

  const [rerendering, setRerendering] = useState(true);

  const [updateState, setUpdateState] = useState(true);

  const [inputf, setInputf] = useState("");

  const [showInput, setShowInput] = useState({});

  //Everytime the component render this function runs which is in the Context .. and the data is returned here to map and render ...
  useEffect(() => {
    getFunction();
  }, [rerendering, updateState]);

  const handleDelete = async (id) => {
    try {
      const deleteResponse = await axios.delete(
        `http://localhost:4000/api/message/${id}`
      );
      console.log(deleteResponse);
      setRerendering(!rerendering);
    } catch (err) {
      console.error("Error while deleting the post", err);
    }
  };

  const handleUpdate = async (id) => {
    if (showInput) {
      try {
        await axios.put("http://localhost:4000/api/message", {
          id: id,
          message: inputf,
        });

        setInputf("");
        setUpdateState(!updateState);
        setShowInput(!showInput);
      } catch (err) {
        console.error("Cannot send the put request");
      }
    }
  };

  const spawnInputField = (id) => {
    setShowInput((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  

  return (
    <>
      {data.length > 0 ? (
        data.map((item) => (
          <div
            key={item._id}
            className="card"
            style={{ width: "32rem", marginBottom: "10px" }}
          >
            <div className="text-center card-header">id : {item._id}</div>
            <div className="card-body">
              <h5 className="card-title">
                {item.name} <FaRegEdit onClick={ () =>  spawnInputField(item._id)} />{" "}
              </h5>
              <input
                type="text"
                value={inputf}
                onChange={(e) => setInputf(e.target.value)}
                className={`${showInput[item._id] ? "" : "inputf"}`}
              />
              <p className="card-text">{item.message}</p>
              <a
                href="#"
                className="btn btn-primary"
                onClick={() => handleDelete(item._id)}
              >
                Delete
              </a>
              <a
                href="#"
                className="btn btn-secondary mx-3"
                onClick={() => handleUpdate(item._id)}
              >
                Update
              </a>
            </div>
          </div>
        ))
      ) : (
        <NoDTA />
      )}
    </>
  );
};

export default GetCompo;
