import axios from "axios";
import React, { useState } from "react";

const PostCompo = () => {
  const [name, setName] = useState("");
  const [text, settext] = useState("");

  const handleClick = async ()=>{
    
    await axios.post("http://localhost:4000/api/message",{
      name : name,
      message : text
    })
    setName("")
    settext("")
  }
  return (
    <>
      <div className="mb-3 mt-1 ">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter your name"
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
        <button className="btn mt-3" onClick={handleClick} >Submit</button>
      </div>
    </>
  );
};

export default PostCompo;
