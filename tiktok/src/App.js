import { useState, createContext } from 'react'
import Content from "./Content"


export const ThemeContext = createContext()

// Context
// CompA => CompB => CompC

// 1. Create context
// 2. Provider
// 3. Consumer

function App() {
  const [theme, setTheme] = useState('black')

  const handleToggle = () => {
    setTheme(theme === 'black' ? 'red' : 'black')
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ padding: 20 }}>
        <button onClick={handleToggle}>Toggle theme</button>
        <Content />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
