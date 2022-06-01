import React from 'react';
import { Link } from 'react-scroll';
import '../styles/Team.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Team(props) {
    return (
        <section id="team">
            <h3>Social Art House Team</h3>
            <div className="container">
                <div className="card">
                    <LazyLoadImage effect="blur" src="https://socialarthouse.s3.us-east-2.amazonaws.com/team/marlene.jpg" alt="marlene" />
                    <h4>Marlene Arce</h4>
                    <h5>Founder, CEO</h5>
                </div>
                <div className="card">
                    <LazyLoadImage effect="blur" src="https://socialarthouse.s3.us-east-2.amazonaws.com/team/justine.jpg" alt="justine" />
                    <h4>Justine Berger</h4>
                    <h5>COO, Developing Partner</h5>
                </div>
                <div className="card">
                    <LazyLoadImage effect="blur" src="https://socialarthouse.s3.us-east-2.amazonaws.com/team/maria.jpg" alt="maria" />
                    <h4>Maria Vigarito</h4>
                    <h5>Executive Event &amp; Brand Specialist</h5>
                </div>
                <div className="card">
                    <LazyLoadImage effect="blur" src="https://socialarthouse.s3.us-east-2.amazonaws.com/team/courtney.jpg" alt="courtney" />
                    <h4>Courtney Bright</h4>
                    <h5>Executive Content Specialist &amp; Brand Storyteller</h5>
                </div>
                <div className="card">
                    <LazyLoadImage effect="blur" src="https://socialarthouse.s3.us-east-2.amazonaws.com/team/lynn.jpg" alt="lynn" />
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