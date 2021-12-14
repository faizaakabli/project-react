import React, { useContext } from "react";
import './composent.css';
import { themeContext } from "../context/themeContext";

export default function Composent(){
    const {theme} = useContext(themeContext);
    return(
        <div className={theme ? 'contenu light' : 
        'contenu dark'}>
            <p>Le Pendu</p>
            
        </div>
    )
} 