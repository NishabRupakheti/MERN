import React, { useContext, useEffect, useState } from "react";
import Context from "../Stores/contextProvider";
import axios from "axios";
import NoDTA from "./NoDTA";
import { FaRegEdit } from "react-icons/fa";

const GetCompo = () => {
  const { data, getFunction, token } = useContext(Context);
  const [rerendering, setRerendering] = useState(true);
  const [updateState, setUpdateState] = useState(true);
  const [inputf, setInputf] = useState({});
  const [showInput, setShowInput] = useState({});

  // Fetch data once on mount
  useEffect(() => {
    getFunction();
  }, [rerendering, updateState]);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:4000/api/message", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          id: id,
        },
      });

      setRerendering(!rerendering);
    } catch (err) {
      console.error("Error while deleting the post", err);
    }
  };

  const handleUpdate = async (id) => {
    if (showInput[id]) {
      try {
        await axios.put(
          "http://localhost:4000/api/message",
          {
            id: id,
            message: inputf[id] || "",
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setInputf((prevState) => ({ ...prevState, [id]: "" }));
        setUpdateState(!updateState);
        setShowInput((prevState) => ({ ...prevState, [id]: false }));
      } catch (err) {
        console.error("Cannot send the put request", err);
      }
    }
  };

  const spawnInputField = (id) => {
    setShowInput((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleInputChange = (id, value) => {
    setInputf((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <>
      {data.length > 0 ? (
        data.map((item) => (
          <div
            key={item._id}
            className="card shadow-sm mb-4"
            style={{ width: "32rem" }}
          >
            <div className="card-header text-center bg-primary text-white">
              <strong>ID:</strong> {item._id}
            </div>
            <div className="card-body">
              <h5 className="card-title d-flex justify-content-between align-items-center">
                {item.title}
                <FaRegEdit
                  className="text-secondary"
                  style={{ cursor: "pointer" }}
                  onClick={() => spawnInputField(item._id)}
                />
              </h5>
              {showInput[item._id] && (
                <input
                  type="text"
                  value={inputf[item._id] || ""}
                  onChange={(e) => handleInputChange(item._id, e.target.value)}
                  className="form-control mb-3"
                  placeholder="Edit"
                />
              )}
              <p className="card-text">{item.message}</p>
              <div className="d-flex justify-content-between">
                <a
                  href="#"
                  className="btn btn-danger"
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </a>
                <a
                  href="#"
                  className="btn btn-secondary"
                  onClick={() => handleUpdate(item._id)}
                >
                  Update
                </a>
              </div>
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
