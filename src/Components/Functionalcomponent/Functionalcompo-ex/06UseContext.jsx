import React, { createContext, useContext } from 'react';
import { useState } from 'react';
import "./useContextCss.css";


const ThemeContext = createContext('light')
    
    const UseContext = () => {
    const [theme, setTheme] = useState("light");
    return (
        <>

            <ThemeContext.Provider value={theme}>
                <Form />
            </ThemeContext.Provider>
            <button onClick={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark');
            }}>
                toggle button
            </button>

        </>
    );
};

function Form({ children }) {
    return (
        <Panel title="welcome">
            <button>Sign up</button>
            <button>Log in</button>
        </Panel>
    );
}

function Panel({ title, children }) {
    const theme = useContext(ThemeContext);
    const className = 'panel-' + theme;
    return (
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    )
}

function Button({ children, onClick }) {
    const theme = useContext(ThemeContext);
    const className = 'button-' + theme;
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
}

export default UseContext;