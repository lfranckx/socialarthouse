import React from 'react';
import '../styles/Navbar.scss';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar(props) {
    const location = useLocation();

    return (
        <div id={props.id}>
            <nav>
                <div className="empty-space"></div>

                <Link to="/">
                    <h1><img id="logo" src='images/SAH_BIG.png' alt="logo"/></h1>
                </Link>

                {location.pathname === '/' && <Link className="btn" to="/contact">Need to Connect?</Link>}
                {location.pathname === '/contact' && <Link className="btn" to="/">Go Back</Link>}
            </nav>
        </div>
    );
}