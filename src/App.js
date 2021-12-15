import React from 'react';
import './App.css';
import CallApi from './api/callApi';
import Score from './api/scoreApi';
import User from './component/user';
import { useContext } from "react";
import { ThemeContext } from "./component/theme";


//import { useState } from "react";
//import { ToastContainer, toast } from 'react-toastify';

function refresh(){
  window.location.reload();
}



function App() {
 
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  return (

    <div
      className="app"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <h1>Le jeu du pendu mais sans pendu</h1>

      <button className="btn-1" type="button" onClick={toggleTheme}>

        {isDark ? "Light mode" : "Dark mode"}
      </button>

      <button type="button" class="btn btn-secondary" onClick = {refresh} onclick="history.go(0)" >  nouvelle partie</button>

      <CallApi />      
      <User />
      <Score/>
      
    </div>
   
  );
}

export default App;