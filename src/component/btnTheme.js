import React, {useContext} from "react";
import './btnTheme.css'
import { themeContext } from "../context/themeContext";

export default function BtnTheme(){
    const {toggleTheme, theme} = useContext(themeContext)

    return(
        <button onClick={toggleTheme}
            classeName={theme ? 'btn-toggle light' : 
            'btn-toggled dark'}>
                {theme ? "Dark" : "Light"}
        </button>
    )
}