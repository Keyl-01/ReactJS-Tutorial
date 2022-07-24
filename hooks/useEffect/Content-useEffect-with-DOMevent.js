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


const types = ['posts', 'comments', 'albums']

function Content() {
    const [posts, setPosts] = useState([])
    const [type, setType] = useState(types[0])

    const [showGoToTop, setShowGoToTop] = useState(false)
    
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })

    }, [type])

    useEffect(() => {
        const handleScroll = () => {
            // if (window.scrollY > 200) {
            //     // Show

            // } else {
            //     // Hide

            // }
            
            setShowGoToTop(window.scrollY > 200)
        }

        window.addEventListener('scroll', handleScroll)
        console.log('add')

        // Cleanup function
        return () => {
            console.log('remove')
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])



    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        const handleRedize = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleRedize)

        return () => {
            window.removeEventListener('resize', handleRedize)
        }
    }, [])

    return (
        <div>
            {types.map(tab => (
                <button 
                    key={tab}
                    style={tab === type ? {
                        color: '#fff',
                        backgroundColor: '#333'
                    } : {}}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}
            <h1>{width}</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>
            {showGoToTop && (<button
                style={{
                    position: 'fixed',
                    right: 20,
                    bottom: 20
                }}
            >
                Go to Top
            </button>
            )}
        </div>
    )
}

export default Content