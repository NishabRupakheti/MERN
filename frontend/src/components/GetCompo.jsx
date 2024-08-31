import React, { useContext, useEffect, useState } from "react";
import Context from "../Stores/contextProvider";
import axios from "axios";
import NoDTA from "./NoDTA";

const GetCompo = () => {
  const { data, getFunction } = useContext(Context);

  const [rerendering, setRerendering] = useState(true);

  //Everytime the component render this function runs which is in the Context .. and the data is returned here to map and render ...
  useEffect(() => {
    getFunction();
  }, [rerendering]);

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
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.message}</p>
              <a
                href="#"
                className="btn btn-primary"
                onClick={() => handleDelete(item._id)}
              >
                Delete
              </a>
            </div>
          </div>
        ))
      ) : (
        <NoDTA/>
      )}
    </>
  );
};

export default GetCompo;
