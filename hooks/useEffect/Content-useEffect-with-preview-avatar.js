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
        </div>
    )
}

export default Content