import { useState } from'react'

function App() {
  const [toggle, setToggle] = useState('Show')

  const handleToggle = () => {
    setToggle(prev => {
      if (prev === 'Show') {
        return 'Hide'
      }
      return 'Show'
    })
  }

  return (
    <div style={{padding: 20}}>
      <button onClick={handleToggle}>{toggle}</button>
    </div>
  )
}

export default App;
