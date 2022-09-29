import './SideNav.css'
import NavIcon from './NavIcon/NavIcon'
import meditating from '../../assets/meditating.svg'
import dumbell from '../../assets/dumbell.svg'
import cycling from '../../assets/cycling.svg'
import swimming from '../../assets/swimming.svg'

/**
 * Displays side bar with activities icons
 * 
 * @component
 */
function SideNav() {
    return(
        <div className='side-nav'>
            <div className='navicon-container'>
                <NavIcon><img src={meditating} alt="meditating" /></NavIcon>
                <NavIcon><img src={swimming} alt="swimming" /></NavIcon>
                <NavIcon><img src={cycling} alt="cycling" /></NavIcon>
                <NavIcon><img src={dumbell} alt="dumbell"/></NavIcon>
            </div>
            <p>copyright, SportSee 2020</p>
        </div>
    )
}

export default SideNav