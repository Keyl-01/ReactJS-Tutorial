import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function Paragraph() {

    const theme = useContext(ThemeContext).theme

    console.log('theme: ', theme);

    return (
        <div>
            <h1 style={{ color: theme }}>Hey Guys!</h1>
        </div>
    )
}

export default Paragraph