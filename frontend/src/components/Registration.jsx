import React, { useContext } from "react";
import Context from "../Stores/contextProvider";

const Registration = () => {
  const { changeLogState } = useContext(Context);

  return (
    <>
      <div className="container-fluid">
        <form className="mx-auto">
          <h4 className="text-center">Registration</h4>
          <div className="mb-3 mt-5">
            <label htmlFor="exampleInputEmail1" className="form-label">
              UserName
            </label>
            <input
              type="email"
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

          <button type="submit" className="btn btn-primary mt-5 mb-2">
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
