import React from 'react';
import '../styles/Navbar.scss';
import logo from '../images/logo.png';
import Homepage from './Homepage';
import { Link } from 'react-router-dom';
// import { Link, animateScroll as scroll } from 'react-scroll';

export default function Navbar(props) {
    return (
        <div id={props.id}>
            <nav>
                <div className="empty-space"></div>

                <Link to={Homepage}>
                    <h1><img id="logo" src={logo} alt="logo"/></h1>
                </Link>

                <Link class="btn" to={Homepage}>Need to Connect?</Link>
            </nav>
        </div>
    );
}