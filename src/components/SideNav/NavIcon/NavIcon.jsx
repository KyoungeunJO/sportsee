import './NavIcon.css'

function NavIcon({children}) {
    return (
        <a>
            <div className="navIcon">
                {children}
            </div>
        </a>
    )   
}

export default NavIcon