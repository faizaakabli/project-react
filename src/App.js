import React from 'react';
import './App.css';
import Composent from './component/composent';
import BtnTheme from './component/btnTheme';
import ThemeContextProvider from './context/themeContext';
//import { useState } from "react";
//import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
      <BtnTheme/>
        <Composent />
        
      </ThemeContextProvider>
    </div>
  );
}

export default App;
