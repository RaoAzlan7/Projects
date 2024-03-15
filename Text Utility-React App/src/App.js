import './App.css';
import Alert from './components/Alert';
// import { About } from './components/About';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import React, {useState} from 'react'

function App() {
  const[mode,setMode]=useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert=(mess,typ)=>{
    setAlert({
      message:mess,
      type:typ
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode=()=>{
    if (mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor='#123465';
      showAlert("Dark Mode Activated","success");
    }
    else{
      setMode("light")
      document.body.style.backgroundColor='white';  
      showAlert("Light Mode Activated","success");

    }
  }
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <About></About> */}
        <TextArea showAlert={showAlert}mode={mode}></TextArea>
        </div>
    </>
  );
}
export default App;
