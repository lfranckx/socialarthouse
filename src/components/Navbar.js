import React from 'react';
import '../styles/Navbar.scss';
import logo from '../images/logo.png';
import Homepage from './Homepage';
// import { Link } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';

export default function Navbar(props) {
    return (
        <div id="navbar">
            <nav>
                {/* <ul>
                    <li>
                        <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500}>About</Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="services" spy={true} smooth={true} offset={0} duration={500}>Services</Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="connect" spy={true} smooth={true} offset={0} duration={500}>Team</Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="partners" spy={true} smooth={true} offset={0} duration={500}>Partners</Link>
                    </li>
                </ul> */}
                <div className="empty-space"></div>

                <h1><img id="logo" src={logo} alt="logo"/></h1>

                <Link class="btn" to={Homepage}>Need to Connect?</Link>
            </nav>
        </div>
    );
}