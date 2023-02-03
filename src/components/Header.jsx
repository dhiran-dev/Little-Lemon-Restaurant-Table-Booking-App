import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';

const Header = () => {
    return (
        <>
            <header>
                <div className='container'>
                    <img src={logo} alt='little lemon logo' />
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                                <Link to='/'>About</Link>
                                <Link to='/'>Menu</Link>
                                <Link to='booking'>Reservation</Link>
                                <Link to='/'>Order Online</Link>
                                <Link to='/'>Login</Link>
                            </li>
                        </ul>
                    
                </div>
            </header>
        </>
    )
}

export default Header
