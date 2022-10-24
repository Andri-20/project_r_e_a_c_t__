import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Theme';
import {GlobalStyles} from "./globalStyles";

import css from './SWITCHER.module.css'
function Switcher() {
    const [theme, setTheme] = useState('dark');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles/>
                <button onClick={toggleTheme} className={css.btn_switcher}></button>
        </ThemeProvider>
    );
}

export default Switcher;