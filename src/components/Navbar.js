import React from 'react';
import '../styles/Navbar.scss';
import logo from '../images/logo.png';
import Homepage from './Homepage';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <div id="navbar">
            <nav>
                <div className="empty-space"></div>

                <h1><img id="logo" src={logo} alt="logo"/></h1>

                <Link class="btn" to={Homepage}>Need to Connect?</Link>
            </nav>
        </div>
    );
}