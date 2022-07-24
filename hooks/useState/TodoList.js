import { useState } from'react'

function App() {
  const [input, setInput] = useState('')
  const [tasks, setTasks] = useState(() => {
    const storageTasks = JSON.parse(localStorage.getItem('tasks'))
    console.log(storageTasks)
    return storageTasks ?? []
  })

  const handleAdd = () => {
    setInput('')
    setTasks(prev => {
      const newTask = [input, ...prev]

      // Save to local storage
      const jsonTask = JSON.stringify(newTask)
      localStorage.setItem('tasks', jsonTask)

      return newTask
    })
  }

  return (
    <div style={{padding: 20}}>
      <input 
        value={input} 
        onChange={e => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
