import {Link} from 'react-router-dom'
import './Header.css'

import logo from '../../assets/images/logo.png'

const Header = () => {
    return (
    <div className="navbar navbar-expand-md  navbar-dark vyborg-navbar">
        <div className="container">
            <a href="/" className="navbar-brand">
            <img src={logo} alt="" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainmenu">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><Link to='/' className='nav-link'>Home</Link></li>
                    <li className="nav-item"><Link to='/browse' className='nav-link'>Browse</Link></li>
                    <li className="nav-item dropdown">
                        <a href="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Games</a>
                        <ul className="dropdown-menu bg-dark">
                            <li><Link to='/Fortnite' className='dropdown-item text-white'>Fortnite</Link></li>
                            <li><Link to='/Call of Duty' className='dropdown-item text-white'>Call of Duty</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item"><Link to='/Streams' className='nav-link'>Streams</Link></li>
                    <li className="nav-item"><Link to='/Profile' className='nav-link'>Profile</Link></li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Header