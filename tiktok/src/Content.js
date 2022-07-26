import { useEffect, useState } from 'react'


// 1. useEffect(callback)
// - Gọi callback mỗi khi component re-render
// - Gọi callback sau khi component thêm element vào DOM
// 2. useEffect(callback, [])
// - Chỉ gọi callback 1 lần sau khi component mounted
// 3. useEffect(callback, [deps])
// - Callback sẽ được gọi lại mỗi khi deps thay đổi

// -------------
// 1. Callback luôn được gọi sau khi component mounted
// 2. Cleanup function luôn được gọi trước khi component unmounted
// 3. Cleanup function luôn được gọi trước khi callback duoc goi (tru lan mounted)


<<<<<<< HEAD
// Example
// function Content() {
//     const [count, setCount] = useState(1)

//     useEffect(() => {
//         console.log(`Mounted or Re-render lan ${count}`)

//         return () => {
//             console.log(`Cleanup lan ${count}`)
//         }
//     }, [count])

//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={() => setCount(count + 1)}>
//                 Click me!
//             </button>
//         </div>
//     )
// }



function Content() {
    const [avatar, setAvatar] = useState('')

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]

        file.preview = URL.createObjectURL(file)

        // console.log(URL.createObjectURL(file))
        console.log(file.preview)

        setAvatar(file)
    }

    useEffect(() => {
        // Cleanup
        return () => {
            avatar && console.log('Remove', avatar.preview);
            avatar && URL.revokeObjectURL(avatar.preview)
            
        }
    }, [avatar])

    return (
        <div>
            <input 
                type="file"
                onChange={handlePreviewAvatar}
            />
            {avatar && (
                <img src={avatar.preview} alt="" width="90%" />
            )}
=======
const lessons = [
    {
        id: 1,
        name: 'ReactJS là gì? Tại sao nên học ReactJS'
    },
    {
        id: 2,
        name: 'SPA/MPA là gì?'
    },
    {
        id: 3,
        name: 'Arrow function'
    },
]

function Content() {
    const [lessonId, setLessonId] = useState(1)

    useEffect(() => {

        const handleComment = ({ detail }) => {
            console.log(detail)
        }

        window.addEventListener(`lesson-${lessonId}`, handleComment)

        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        }
        
    }, [lessonId])

    return (
        <div>
            <ul>
                {lessons.map(lesson => (
                    <li 
                        key={lesson.id}
                        style={{
                            color: lessonId === lesson.id ? 'red' : '#333'
                        }}
                        onClick={() => setLessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
>>>>>>> 1dddab6d391bb7c065295475abd91b45541c81a0
        </div>
    )
}

export default Content