import React, { useContext, useState } from "react";
import Context from "../Stores/contextProvider";
import axios from "axios";


const Registration = () => {
  const { changeLogState } = useContext(Context);
  const [emailf , setEmailf] = useState('')
  const [passwordf, setPasswordf] = useState('')

  const handleRegister = async ()=>{
    try{
      if(passwordf === "" || passwordf.length < 6 ){
        window.alert("Enter a password of minimum length")
        
      }
      else{
        const result = await axios.post('http://127.0.0.1:4000/api/register', {
          email : emailf,
          password : passwordf
        })
        console.log(result)
        if(result.status == 201){
          alert("User registration success")
          setEmailf('')
          setPasswordf('')
        }
      }
     
    }
    catch(err){
      console.log(err)
      if(err.response.status === 409){
        alert("User already exist")
      }
    }

  }

  return (
    <>
      <div className="container-fluid">
        <form className="mx-auto">
          <h4 className="text-center">Registration</h4>
          <div className="mb-3 mt-5">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              value={emailf}
              onChange={e => setEmailf(e.target.value)}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <div className="row  align-items-center">
              <div className="col-auto">
                <label htmlFor="inputPassword6" className="col-form-label">
                  Password
                </label>
              </div>
              <div className="col-auto">
                <input
                  type="password"
                  value={passwordf}
                  onChange={e => setPasswordf(e.target.value)}
                  id="inputPassword6"
                  className="form-control"
                  aria-describedby="passwordHelpInline"
                />
              </div>
              <div className="col-auto">
                <span id="passwordHelpInline" className="form-text">
                  Must be 6-20 characters long.
                </span>
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-primary mt-5 mb-2" onClick={handleRegister} >
            Register
          </button>
        </form>

        <a href="#" className="mt-4" onClick={changeLogState} >
          {" "}
          Already have an account? Login{" "}
        </a>
      </div>
    </>
  );
};

export default Registration;
