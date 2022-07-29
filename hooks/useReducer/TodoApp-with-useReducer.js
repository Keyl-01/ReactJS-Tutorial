import { useReducer, useRef } from'react'

// useReducer
// 1. Init state
// 2. Actions
// 3. Reducer
// 4. Dispatch


// Init state
const initState = {
  job: '',
  jobs: []
}

// Actions
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = payload => {
  return {
    type: SET_JOB,
    payload
  }
}

const addJob = payload => {
  return {
    type: ADD_JOB,
    payload
  }
}

const deleteJob = payload => {
  return {
    type: DELETE_JOB,
    payload
  }
}

// Reducer
const reducer = (state, action) => {
  // console.log('Prev State', state);
  // console.log('Action', action);

  // let newState
  switch(action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload
      }
    case ADD_JOB:
      return {
        ...state,
        jobs: [action.payload, ...state.jobs]
      }
    case DELETE_JOB:
      const newJobs = [...state.jobs]

      newJobs.splice(action.payload, 1)

      return {
        ...state,
        jobs: newJobs
      }
    default:
      throw new Error('Invalid action')
  }

  // console.log('New State', newState);
  // return newState
}


function App() {
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

export default App
