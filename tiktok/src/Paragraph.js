import { useContext } from 'react'
import { ThemeContext } from './App'

function Paragraph() {

    const theme = useContext(ThemeContext)

    console.log('theme: ', theme);

    return (
        <div>
            <h1 style={{ color: theme }}>Hey Guys!</h1>
        </div>
    )
}

export default Paragraph