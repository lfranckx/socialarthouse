import React from 'react';
import '../styles/Navbar.scss';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <div id={props.id}>
            <nav>
                <div className="empty-space"></div>

                <Link to="/">
                    <h1><img id="logo" src='images/SAH_BIG.png' alt="logo"/></h1>
                </Link>

                <Link className="btn" to="/contact">Need to Connect?</Link>
            </nav>
        </div>
    );
}