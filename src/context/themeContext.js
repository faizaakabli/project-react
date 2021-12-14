import React, {createContext, useState} from "react";

export const themeContext = createContext();

const ThemeContextProvider = (props) => {
    const [theme, setTheme] = useState(true);
    const toggleTheme = () => {setTheme(!theme)}
    return (
        <themeContext.Provider value={{theme, toggleTheme}}>
            {props.children}
        </themeContext.Provider>
    )
}

export default ThemeContextProvider;