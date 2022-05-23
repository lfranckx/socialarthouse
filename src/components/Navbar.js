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
                    <h1><img id="logo" src='https://socialarthouse.s3.us-east-2.amazonaws.com/Logos/SAH_BIG.png' alt="logo"/></h1>
                </Link>

                {location.pathname === '/contact' ? <Link className="btn" to="/">Go Back</Link> : <Link className="btn" to="/contact">Need to Connect?</Link>}
            </nav>
        </div>
    );
}