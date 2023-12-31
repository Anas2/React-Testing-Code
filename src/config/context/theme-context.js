import React, { useEffect, useState } from 'react';
const bodyElem = document.getElementsByTagName('body')[0];
console.log(bodyElem, "==========================");

const ThemeContext = React.createContext({
    isDark: false,
    onThemeChanged: () => { }
})

function ThemeContextProvider(props) {

    const [isDark, setIsDark] = useState(true);
    
    useEffect(() => {

        if (isDark) {
            bodyElem.classList.add('body-black');
        } else {
            bodyElem.classList.remove('body-black');
        }

    }, [isDark]);

    return (
        <ThemeContext.Provider value={{
            isDark: isDark,
            onThemeChanged: () => setIsDark((prev) => !prev)
        }}>

            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;