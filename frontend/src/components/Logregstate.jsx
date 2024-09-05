import React, {useContext} from 'react'
import Login from './Login'
import Registration from './Registration'
import Context from '../Stores/contextProvider'



const Logregstate = () => {

    const {isLoggedIn , setIsloggedIn} = useContext(Context)
    return isLoggedIn ? <Registration/> : <Login/>
  
}

export default Logregstate