import { useState, createContext } from 'react'

const ThemeContext = createContext()

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('black')

    const handleToggle = () => {
        setTheme(theme === 'black' ? 'red' : 'black')
    }

    const value = {
        theme,
        handleToggle
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider}