import { useState } from 'react';
import React from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  //Switch,
  Routes,
  Route,
  //Link
} from "react-router-dom";

function App() {
 const [mode, setmode] = useState('light');
 const [alert, setalert] = useState(null);
 
 const showalert =(message, type) => {
    setalert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
 }
 const toggleMode = () =>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showalert('Dark Mode Has been Enabled', 'success');
      // setInterval(() => {
      //   document.title = 'Textutils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install Textutils Now';
      // }, 1500);
 }
 else{
   setmode('light');
   document.body.style.backgroundColor = 'white';
   showalert('Light Mode Has been Enabled', 'success');
 }
}
  return (
    <>
    <Router>
    <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}></Navbar>
    <Alert alert={alert}></Alert>
    <div className="container my-3">
    <Routes>
    <Route exact path="/about" element={<About/>}>
          </Route>
          <Route exact path="/" element={<TextForm showalert={showalert} heading="Enter the text to analyze below" mode={mode}></TextForm>}>
          </Route>
        </Routes>
        </div>
        </Router>
    
    </>
  );
}

export default App;
