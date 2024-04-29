import './App.css';
import Navbar from './component/Navbar';
import Textarea from './component/Textarea';
import React, { useState } from 'react'
import Alert from './component/Alert';


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(props) {

  const [mode, setMode] = useState('light')
  const [modeTxt, setmodeTxt] = useState('dark')
  const [alert, setalert] = useState('')

  const showalert = (msg, type) => {
    setalert({
      msg: msg,
      type: type
    })
  }

  const toggleMode = () => {
    if (mode === 'light' && modeTxt === 'dark') {
      setMode('dark')
      setmodeTxt('light')
      document.body.style.backgroundColor = "black"
      document.body.style.color = "white"
      showalert("Dark mode is Enabled", "success")

      setInterval(() => {
        document.title = "TextUtils - MOli MODE"
      }, 1500);

      setInterval(() => {
        document.title = "TextUtils - DOli  MODE"
      }, 1000);
    }

    else {
      setMode('light')
      setmodeTxt('dark')
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      showalert("Light mode is Enabled", "success")
      document.title = "TextUtils - LIGHT MODE"




    }
  }



  return (
    <>
        <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode} modeTxt={modeTxt}></Navbar>
        <Alert alert={alert} />
        <Textarea heading="Enter Text To Analiyzing" />
        
        

        
          

    </>
  );
}

export default App;
