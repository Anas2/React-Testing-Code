import React, { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTheme } from'../config/redux/reducer/themeSlice';
const bodyElem = document.getElementsByTagName('body')[0];



function Theme(props) {

    const dispatch = useDispatch();
    const [isDark, setIsDark] = useState(false);

    const clickMe = () => {
        console.log(isDark);
        setIsDark(!isDark)
        dispatch(setTheme({isDark:isDark}));
    }

    useEffect(() => {

        if (isDark) {
            bodyElem.classList.add('body-black');
        } else {
            bodyElem.classList.remove('body-black');
        }

    }, [isDark]);

    return (
        <div>
            <button onClick={clickMe}>Click To Dark Theme</button>
        </div>
    );
}

export default Theme;