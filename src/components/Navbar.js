import React from 'react';
import '../styles/Navbar.scss';
import logo from '../images/logo.png';

export default function Navbar(props) {
    return (
        <div id="navbar">
            <nav>
                <div className="empty-space"></div>

                <img id="logo" src={logo} alt="logo"/>

                <button class="btn">Need to Connect</button>
            </nav>
        </div>
    );
}