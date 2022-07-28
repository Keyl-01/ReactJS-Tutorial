import { memo } from 'react'

// ===

function Content({ onIncrease }) {
    console.log('Render Content');

    return (
        <>
            <h1>Hey Guys!</h1>
            <button onClick={onIncrease}>Click me!</button>
        </>
    )
}

export default memo(Content)