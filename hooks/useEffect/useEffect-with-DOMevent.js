import { useState } from'react'
import Content from './Content-useEffect-with-DOMevent';

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
      {toggle==='Show' || <Content />}
    </div>
  )
}

export default App;
