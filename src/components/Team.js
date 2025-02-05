import React from 'react';
import { Link } from 'react-scroll';
import '../styles/Team.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import marlene from '../images/team/marlene.png';
// import lachlan from '../images/team/lachlan.png';
import maria from '../images/team/maria.png';
import lynn from '../images/team/lynn.png';

export default function Team(props) {
    return (
        <section id="team">
            <h3>Social Art House Team</h3>
            <div className="container">
                <div className="card">
                    <LazyLoadImage effect="blur" src={marlene} alt="marlene" />
                    <h4>Marlene Arce</h4>
                    <h5>Founder, CEO</h5>
                </div>
                <div className="card">
                    <LazyLoadImage effect="blur" src={maria} alt="maria" />
                    <h4>Maria Vigarito</h4>
                    <h5>Executive Event &amp; Brand Specialist</h5>
                </div>
                <div className="card">
                    <LazyLoadImage effect="blur" src={lynn} alt="lynn" />
                    <h4>Lynn Soares</h4>
                    <h5>Executive Administration &amp; Event Coordinator</h5>
                </div>

                {/* <div className="card">
                    <LazyLoadImage effect="blur" src={Lachlan} alt="Lachlan" />
                    <h4>Lachlan Franckx</h4>
                    <h5>Web Development &amp; SEO</h5>
                </div> */}
            </div>

            <Link activeClass="active" to="partners" spy={true} smooth={true} offset={0} duration={500}>
                <i className="fas fa-chevron-down bounce"></i>
            </Link>
        </section>
    )
}