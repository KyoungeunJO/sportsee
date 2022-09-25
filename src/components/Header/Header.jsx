import './Header.css'
import useUserInfos from '../../services/useUseInfos'

function Header() {

    const {userInfos} = useUserInfos()

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