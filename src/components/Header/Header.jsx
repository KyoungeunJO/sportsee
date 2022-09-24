import { useState } from 'react'
import './Header.css'

function Header() {

    const [name, setName] = useState("Thomas")

    return (
        <header>
            <h1>Bonjour <span className='name'>{name}</span> </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </header>
    )
}

export default Header