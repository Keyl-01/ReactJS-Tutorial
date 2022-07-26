import { useState } from'react'
import Content from './Content';
import {Polygon} from './Polygon';

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
      <Polygon />
    </div>
  )
}

export default App;
