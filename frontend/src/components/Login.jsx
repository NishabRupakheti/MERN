import React, { useContext, useState } from "react";
import Context from "../Stores/contextProvider";
import axios from "axios";

const Login = () => {
  const [emailf, setemailf] = useState("");
  const [passwordf, setpasswordf] = useState("");
  const { changeLogState, setToken, setIsAuthenticated } = useContext(Context);
  const [error , setError] = useState('')

  const handleLogin = async () => {
    if (passwordf.length < 6 || emailf.length == 0) {
      setError("Too short passoword or email");
    } else {
      try {
        const result = await axios.post("http://localhost:4000/api/login", {
          email: emailf,
          password: passwordf,
        });
        const token = result.data["token"];
        if (token) {
          localStorage.setItem("token", token);
          setToken(token);
          setIsAuthenticated(true)
        }
      } catch (err) {
        if (err.response.status == 400) {
          setError("Credentials not matched");
          setpasswordf("");
        }
        console.log("Failed to send the request", err);
      }
    }
  };

  return (
    <>
      <div className="container-fluid">
        <form className="mx-auto">
          <h4 className="text-center">Login</h4>
          {
            error && <div className="alert alert-danger mt-3" > {error} </div>
          }
          <div className="mb-3 mt-5">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={emailf}
              onChange={(e) => setemailf(e.target.value)}
            />
          </div>
          <div className="mb-3" />
          <div className="row  align-items-center">
            <div className="col-auto">
              <label htmlFor="inputPassword6" className="col-form-label">
                Password
              </label>
            </div>
            <div className="col-auto">
              <input
                value={passwordf}
                onChange={(e) => setpasswordf(e.target.value)}
                type="password"
                id="inputPassword6"
                className="form-control"
                aria-describedby="passwordHelpInline"
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-secondary mt-5 mb-2"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>

        <a href="#" className="mt-4" onClick={changeLogState}>
          {" "}
          Dont have an account? Register{" "}
        </a>
      </div>
    </>
  );
};

export default Login;
