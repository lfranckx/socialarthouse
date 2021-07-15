import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.scss';


const NotFoundPage = () => {
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    return (
        <main>
            <div id='not-found-page'>
                <h2><span>404</span>Oops! The page you are looking for does not exist.</h2>
                <div>
                    <Link className="btn-big" to="/">Return Home</Link>
                </div>
            </div>
        </main>
    )
}

export default NotFoundPage;