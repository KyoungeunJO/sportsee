import './Header.css'

function Header() {
    const name = "Thomas"

    return (
        <header>
            <h1>Bonjour, <span className='name'>{name}</span> </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </header>
    )
}

export default Header