import React from 'react';
import { Link } from 'react-scroll';
import { useSpring, animated } from 'react-spring';

export default function Header() {
    const props = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } })

    return (
        
        <animated.div style={props}>
            <header id="header">
                <h2>Build Your Dream</h2>
                <h3>We Offer an Expansive Consulting Experience for Brands Through <span>Ingenuity, Originality, and Imagination</span></h3>

                <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500}>
                    <i className="fas fa-chevron-down bounce"></i>
                </Link>
            </header>
        </animated.div>
    )
}