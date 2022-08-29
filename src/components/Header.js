import React from 'react';
import logo from '../images/troll-face.png';

function Header() {
    return (
        <header>
            <nav>
                <img src={logo} alt="troll face" className='logo'/>
                <h1 className="header-title">Meme Generator</h1>
                <p>React Course - Project 3</p>
            </nav>
        </header>
    )
}

export default Header;