import './Header.css'
import PropTypes from 'prop-types'

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

Header.propTypes = {
    userInfos: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string,
        age: PropTypes.number
    })
}

export default Header