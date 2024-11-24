import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './Components/Input'
import "./App.css"
export const Port="http://localhost:5000"
const App = () => {
   
  return (<>
    <div className='container appdiv'>
   
    
    <Input />
    </div>
    </>)
}

export default App