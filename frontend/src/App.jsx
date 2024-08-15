import React from 'react'
import Sidebar from './Components/Sidebar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { ContextProvider } from './Stores/contextProvider'
import InnerDiv from './components/InnerDiv'

const App = () => {
  return (
    <ContextProvider>
    <div className='container row mainCont mt-5 p-3' >
      <Sidebar/>
      <div className="displayContainer col-8 p-3 ">
        <InnerDiv/>
      </div>
    </div>
    </ContextProvider>
  )
}

export default App