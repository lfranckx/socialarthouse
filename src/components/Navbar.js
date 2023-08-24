import React from 'react';
import '../styles/Navbar.scss';
import { Link, useLocation } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import logo from '../images/sah-small.png';

export default function Navbar() {
    const location = useLocation();

    return (
        <div id='navbar'>
            <nav>
                <div className="empty-space"></div>

                <Link to="/">
                    <h1><LazyLoadImage effect="blur" id="logo" src={logo} alt="logo"/></h1>
                </Link>

                {location.pathname === '/contact' ? <Link className="btn" to="/">Go Back</Link> : <Link className="btn" to="/contact">Need to Connect?</Link>}
            </nav>
        </div>
    );
}