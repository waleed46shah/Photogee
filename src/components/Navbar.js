import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"
import {Button} from './Button'
function Navbar() {
    const [click, setClick] = useState(false); // for navbar menu -> PC to Phone transformation
    const [button, setButton] = useState(true); // For Button component

    const handleClick = () => setClick(!click); // Handling click to convert menu icon to cross and vice versa
    const closeMobileMenu = () => setClick(false); // For mobile menu to close and set click state to false

    const showButton = () => { // To show sign up button on phones
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(()=>
    {
        showButton() 
    },[])            //Amazing hook. Pass function and empty parenthesis to rendern't at every refresh
    
    
    
    window.addEventListener('resize', showButton); // To show or hide button on the base of size
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        PhotoGee
                        <i className='fab fa-typo3'/>
                    </Link>
                    <div className='menu-icon'
                        onClick={handleClick}>
                        <i className={
                            click ? 'fas fa-times' : 'fas fa-bars'
                        }/>
                    </div>
                    <ul className={
                        click ? 'nav-menu active' : 'nav-menu'
                    }>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links'
                                onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links'
                                onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/photography' className='nav-links'
                                onClick={closeMobileMenu}>
                                Photography
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile'
                                onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {
                    button && <Button buttonStyle='btn--outline'>Sign Up</Button>
                } </div>
            </nav>
        </>
    )
}
export default Navbar
