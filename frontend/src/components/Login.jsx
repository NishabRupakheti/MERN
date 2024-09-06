import React , {useContext} from 'react'
import Context from '../Stores/contextProvider'



const Login = () => {


    const {changeLogState} = useContext(Context)

  return (
    <>
        <div className="container-fluid">
            <form className="mx-auto">
                <h4 className="text-center">Login</h4>
                <div className="mb-3 mt-5">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3"/>
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
                </div>
              
                <button type="submit" className="btn btn-secondary mt-5 mb-2 ">Login</button>
              </form>

        <a href="#" className="mt-4" onClick={changeLogState} > Dont have an account? Register </a>
        </div>
    </>
  )
}

export default Login