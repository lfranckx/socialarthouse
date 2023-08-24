import '../styles/SideNav.scss';
import React from 'react';
import { Link } from 'react-router-dom';

export default function SideNav(props) {
    return (
        <>
            <div id='side-nav'>
                <nav>
                    <div className='link-wrap'>
                        <Link to='/'>Social Art House</Link>
                    </div>
                    <div className='link-wrap'>
                        /
                    </div>
                    <div className='link-wrap'>
                        <Link to='/blog'>Social Art House Blog</Link>
                    </div>
                    <div className='link-wrap'>
                        /
                    </div>
                    <div className='link-wrap'>
                        <Link to='/'>Buid Your Dream</Link>
                    </div>
                </nav>
            </div>
        </>
    );
}