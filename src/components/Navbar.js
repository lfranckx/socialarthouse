import React from 'react';
import '../styles/Navbar.scss';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <div id={props.id}>
            <nav>
                <div className="empty-space"></div>

                <Link to="/">
                    <h1><img id="logo" src={logo} alt="logo"/></h1>
                </Link>

                <Link class="btn" to="/contact">Need to Connect?</Link>
            </nav>
        </div>
    );
}