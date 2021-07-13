import React from 'react';
import { Link } from 'react-scroll';

export default function About(props) {
    return (
        <section id={props.id}>
            <h3>We are the house of incredible creative solutions</h3>
            <ul>
                <li>
                    <h4>Who We Are</h4>
                    <p>A pro-beauty management and creative agency, offering an expansive consulting experience for brands through ingenuity, originality and imagination.</p>
                </li>
                <li>
                    <h4>What We Do (Theory)</h4>
                    <p>Our job is to leverage industry relationships to support and drive your growth.</p>
                </li>
                <li>
                    <h4>Why We Do It</h4>
                    <p>Our mission for both our brand and influencer partners is to build long-lasting collaborations that promote strategic development and gorwth for all.</p>
                </li>
            </ul>

            <Link activeClass="active" to="services" spy={true} smooth={true} offset={0} duration={500}>
                <i id="about-down-arrow" class="fas fa-chevron-down bounce"></i>
            </Link>
        </section>
    )
}