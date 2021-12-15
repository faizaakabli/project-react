import React from 'react';
import './App.css';
import CallApi from './api/callApi';
import Score from './api/score';
import User from './component/user';
import { useContext } from "react";
import { ThemeContext } from "./component/theme";

//import { useState } from "react";
//import { ToastContainer, toast } from 'react-toastify';




function App() {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  return (

    <div
      className="app"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <h1>Le jeu du pendu</h1>

      <button className="btn" type="button" onClick={toggleTheme}>

        {isDark ? "Light mode" : "Dark mode"}
      </button>
      <CallApi />
      
      <User />
      <Score/>
      
    </div>
    // <div className="App">

    //   <ThemeContextProvider>
    //  <BtnToggle/>
    //  <CallApi/>
    //  
    //  

    // </ThemeContextProvider> 
    // </div>
  );
}

export default App;