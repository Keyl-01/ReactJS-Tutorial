import { memo } from 'react'

// ===

function Content({ count }) {
    console.log('Render Content');

    return <h1>Hey Guys! {count}</h1>
}

export default memo(Content)