import './Header.css'

function Header({userInfos}) {

    return (
        <header>
            {userInfos &&
                <h1>Bonjour <span className='name'>{userInfos.firstName}</span> </h1>
            }
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </header>
    )
}

export default Header