import React, { useContext, useState } from "react";
import Context from "../Stores/contextProvider";
import axios from "axios";

const Registration = () => {
  const { changeLogState } = useContext(Context);
  const [emailf, setEmailf] = useState("");
  const [passwordf, setPasswordf] = useState("");
  const [error, setError] = useState();

  const removeErrorTimer = ()=>{
    setTimeout(() => {
      setError("")
    }, 2000);
  }

  const handleRegister = async (e) => {
    e.preventDefault();

      try {
        const result = await axios.post("http://127.0.0.1:4000/api/register", {
          email: emailf,
          password: passwordf,
        });
        console.log(result);
        if (result.status == 201) {
          
          setEmailf("");
          setPasswordf("");
          setError("Success");
          removeErrorTimer()
        }
      } catch (err) {
        console.log(err);
        if (err.response.status === 409) {
          setError("User already exist");
        }
        if(err.response.status === 400){
          setError("Password criteria  mismatched")
          setPasswordf("")
          removeErrorTimer()
        }


    }
  };

  return (
    <>
      <div className="container-fluid">
        <form className="mx-auto" onSubmit={handleRegister}>
          <h4 className="text-center alert alert-info" style={{fontFamily:"monospace"}} >Register</h4>
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="mb-3 mt-5">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              value={emailf}
              onChange={(e) => setEmailf(e.target.value)}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
          </div>

          <div className="mb-3">
            <div className="row align-items-center">
              <div className="col-auto">
                <label htmlFor="inputPassword6" className="col-form-label">
                  Password
                </label>
              </div>
              <div className="col-auto">
                <input
                  type="password"
                  value={passwordf}
                  onChange={(e) => setPasswordf(e.target.value)}
                  id="inputPassword6"
                  className="form-control"
                  aria-describedby="passwordHelpInline"
                  required
                />
              </div>
              <div className="col-auto">
                <span id="passwordHelpInline" className="form-text">
                  Must be 6-20 characters long.
                </span>
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-primary mt-5 mb-2">
            Register
          </button>
        </form>

        <a href="#" className="mt-4" onClick={changeLogState}>
          Already have an account? Login
        </a>
      </div>
    </>
  );
};

export default Registration;
