import { useReducer, useRef } from 'react'
import reducer, { initState } from './reducer'
import { setJob, addJob, deleteJob } from './actions'

// useReducer
// 1. Init state
// 2. Actions
// 3. Reducer
// 4. Dispatch


function Todo() {
    const [state, dispatch] = useReducer(reducer, initState)
    const inputRef = useRef()
  
    const { job, jobs } = state
  
    const handleAdd = () => {
      dispatch(addJob(job))
      dispatch(setJob(''))
  
      inputRef.current.focus()
    }
  
    return (
      <div style={{ padding: '0 20px' }}>
        <h3>Todo</h3>
        <input 
          ref={inputRef}
          value={job}
          placeholder="Enter todo..."
          onChange={e => {
            dispatch(setJob(e.target.value))
          }}
        />
        <button
          onClick={handleAdd}
        >
          Add
        </button>
        <ul>
          {jobs.map((job, index) => (
            <li key={index}>
              {job} 
              <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
            </li>
          ))}
        </ul>
      </div>
    )
}

  export default Todo