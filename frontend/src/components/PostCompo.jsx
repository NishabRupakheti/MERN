import axios from "axios";
import React, { useState, useContext } from "react";
import Context from "../Stores/contextProvider";

const PostCompo = () => {
  const { token } = useContext(Context);

  const [name, setName] = useState("");
  const [text, settext] = useState("");
  const [status, setStatus] = useState("")

  const removeStatusTimer = ()=>{
    setTimeout(() => {
      setStatus("")
    }, 2000);
  }

  const handleClick = async () => {
    try {
      await axios.post(
        "http://localhost:4000/api/message",
        {
          title: name,
          message: text,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setName("");
      settext("");
      setStatus("Success")
      removeStatusTimer()
    } catch (error) {
      console.error( "This is the frontend ",error);
      if(error.response.status === 400){
        setStatus("Title field missing")
        removeStatusTimer()
      }
      
    }
  };
  return (
    <>
      <div className="mb-3 mt-1 ">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Title
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter something"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Write something
        </label>
        <textarea
          value={text}
          onChange={(e) => settext(e.target.value)}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
        <button
          className="btn btn-sm btn-outline-dark mt-3"
          onClick={handleClick}
        >
          Submit
        </button>
      </div>
      {
        status && <div className="container  text-center alert alert-success " > {status}  </div>
      }
    </>
  );
};

export default PostCompo;
