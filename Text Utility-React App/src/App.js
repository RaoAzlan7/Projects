import './App.css';
// import { About } from './components/About';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import React, {useState} from 'react'
function App() {
  const[mode,setMode]=useState('light');
  const toggleMode=()=>{
    if (mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor='#123465';
    }
    else{
      setMode("light")
      document.body.style.backgroundColor='white';  
    }
  }
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode}></Navbar>
      <div className="container my-3">
      {/* <About></About> */}
        <TextArea mode={mode}></TextArea>
        </div>
    </>
  );
}
export default App;
