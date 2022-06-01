import React from 'react';
import '../styles/Navbar.scss';
import { Link, useLocation } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Navbar(props) {
    const location = useLocation();

    return (
        <div id={props.id}>
            <nav>
                <div className="empty-space"></div>

                <Link to="/">
                    <h1><LazyLoadImage effect="blur" id="logo" src='https://socialarthouse.s3.us-east-2.amazonaws.com/Logos/SAH_BIG.png' alt="logo"/></h1>
                </Link>

                {location.pathname === '/contact' ? <Link className="btn" to="/">Go Back</Link> : <Link className="btn" to="/contact">Need to Connect?</Link>}
            </nav>
        </div>
    );
}