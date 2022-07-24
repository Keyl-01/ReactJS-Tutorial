import { useState } from'react'

// Example
// function App() {

//   const [counter, setCounter] = useState(1)

//   const handleIncrease = () => {
//     // setCounter(counter + 1)
//     setCounter(prevState => prevState + 1)
//   }

//   return (
//     <div className="App" style={{padding: 20}}>
//       <h1>{counter}</h1>
//       <button onClick={handleIncrease}>Increase</button>
//     </div>
//   );
// }



// Random gift
// const gifts = [
//   'Core I9',
//   'Ram 16G',
//   'Card MSI'
// ]

// function App() {

//   const [gift, setGift] = useState('')

//   const randomGift = () => {
//     const index = Math.floor(Math.random() * gifts.length)

//     setGift(gifts[index])
//   }

//   return (
//     <div style={{padding: 20}}>
//        <h1>{gift || 'Chưa có phần thưởng' }</h1>
//        <button onClick={randomGift}>Lấy thưởng</button>
//     </div>
//   )
// }



const courses = [
  {
    id: 0,
    name: 'HTML, CSS'
  },
  {
    id: 1,
    name: 'Javascript'
  },
  {
    id: 2,
    name: 'ReactJS'
  }
]


// Radio
// function App() {
//   const [checked, setChecked] = useState(1)

//   const handleSubmit = () => console.log({id: checked})

//   return (
//     <div style={{padding: 20}}>
//       {courses.map(course => (
//         <div key={course.id}>
//           <input 
//             type="radio"
//             checked={checked === course.id}
//             onChange={() => setChecked(course.id)}
//           />
//           {course.name}
//         </div>
//       ))}
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   )
// }


// Checkbox
function App() {
  const [checked, setChecked] = useState([])

  const handleCheck = id => {
    // if(checked.includes(id)) {
    //   setChecked(checked.filter(item => item !== id))
    // } else {
    //   setChecked(prev => [...prev, id])
    // }

    setChecked(prev => {
      const isChecked = checked.includes(id)
      if(isChecked) {
        return checked.filter(item => item !== id)
      } else {
        return [...prev, id]
      }
    })
  }

  const handleSubmit = () => console.log({ids: checked})

  return (
    <div style={{padding: 20}}>
      {courses.map(course => (
        <div key={course.id}>
          <input 
            type="checkbox"
            checked={checked.includes(course.id)}
            onChange={() => handleCheck(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default App;
