import React  from 'react';
import './App.css';
import BtnToggle from './component/btnTheme';
import CallApi from './api/callApi';
import Contenu from './component/composent';
import ThemeContextProvider from './component/themeContext';
//import { useState } from "react";
//import { ToastContainer, toast } from 'react-toastify';




  function App() {
    return (
      <div className="App">
        <CallApi/>
        <ThemeContextProvider>
       <BtnToggle/>
       <Contenu/>
      </ThemeContextProvider> 
      </div>
    );
  }

  export default App;