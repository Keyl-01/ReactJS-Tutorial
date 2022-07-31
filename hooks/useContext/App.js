import { useContext } from "react"
import Content from "./Content"
import { ThemeContext } from "./ThemeContext"

// Context
// CompA => CompB => CompC

// 1. Create context
// 2. Provider
// 3. Consumer

function App() {
  const handleToggle = useContext(ThemeContext).handleToggle

  return (
      <div style={{ padding: 20 }}>
        <button onClick={handleToggle}>Toggle theme</button>
        <Content />
      </div>
  )
}

export default App
