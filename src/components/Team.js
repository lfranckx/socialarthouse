import React from 'react';
import { Link } from 'react-scroll';
import '../styles/Team.scss';

export default function Team(props) {
    return (
        <section id="team">
            <h3>Social Art House Team</h3>
            <div className="container">
                <div className="card">
                    <img src="images/marlene.jpg" alt="marlene" />
                    <h4>Marlene Arce</h4>
                    <h5>Founder, CEO</h5>
                </div>
                <div className="card">
                    <img src="images/justine.jpg" alt="justine" />
                    <h4>Justine Berger</h4>
                    <h5>COO, Developing Partner</h5>
                </div>
                <div className="card">
                    <img src="images/maria.jpg" alt="maria" />
                    <h4>Maria Vigarito</h4>
                    <h5>Executive Event &amp; Brand Specialist</h5>
                </div>
                <div className="card">
                    <img src="images/courtney.jpg" alt="courtney" />
                    <h4>Courtney Bright</h4>
                    <h5>Executive Content Specialist | <span>Brand Storyteller</span></h5>
                </div>
                <div className="card">
                    <img src="images/lynn.jpg" alt="lynn" />
                    <h4>Lynn Soares</h4>
                    <h5>Executive Administration &amp; Event Coordinator</h5>
                </div>
            </div>

            <Link activeClass="active" to="partners" spy={true} smooth={true} offset={0} duration={500}>
                <i className="fas fa-chevron-down bounce"></i>
            </Link>
        </section>
    )
}