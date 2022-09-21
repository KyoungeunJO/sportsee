import './Nav.css'
import logo from '../../assets/logo.svg';

function Nav() {
    return (
        <nav>
            <img src={logo} id="logo" alt="logo_sportsee" />
            <a href='#'>Accueil</a>
            <a href='#'>Profil</a>
            <a href='#'>Réglage</a>
            <a href='#'>Communauté</a>

        </nav>
    )
}

export default Nav