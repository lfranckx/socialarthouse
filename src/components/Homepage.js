import React from 'react';
import '../styles/Homepage.scss';
import { Link } from 'react-router-dom';

import ArtistRoster from './ArtistRoster';
import Partners from './Partners';
import Services from './Services';

import maria from "../images/maria.jpg";
import justine from "../images/justine.jpg";
import marlene from "../images/marlene.jpg";
import courtney from "../images/courtney.jpg";

export default function Homepage(props) {
    return (
        <div id="homepage">
            <header>
                <h2>Build Your Dream</h2>
                <h3>We Offer an Expansive Consulting Experience for Brands Through <span>Ingenuity, Originality, and Imagination</span></h3>
            </header>

            <main>
                <section id="about">
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
                </section>

                <Services />

                <section id="contact">
                    <h3>Need to Connect?</h3>

                    <div >
                        <Link className="btn-big" to={Homepage}>Schedule a Call</Link>
                    </div>
                </section>

                <section id="team">
                    <h3>Social Arthouse Team</h3>
                    <div className="container">
                        <div className="card">
                            <img src={maria} alt="maria" />
                            <h4>Maria Vigarito</h4>
                            <h5>Executive Event &amp; Brand Specialist</h5>
                        </div>
                        <div className="card">
                            <img src={justine} alt="justine" />
                            <h4>Justine Berger</h4>
                            <h5>COO, Developing Partner</h5>
                        </div>
                        <div className="card">
                            <img src={marlene} alt="marlene" />
                            <h4>Marlene Arce</h4>
                            <h5>Founder, CEO</h5>
                        </div>
                        <div className="card">
                            <img src={courtney} alt="courtney" />
                            <h4>Courtney Bright</h4>
                            <h5>Exective Content Specialist | <span>Brand Storyteller</span></h5>
                        </div>
                    </div>
                </section>

                <Partners />
                <ArtistRoster />
            </main>
        </div>
    );
}