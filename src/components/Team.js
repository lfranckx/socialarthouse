import React from 'react';
import { Link } from 'react-scroll';
import maria from "../images/maria.jpg";
import justine from "../images/justine.jpg";
import marlene from "../images/marlene.jpg";
import courtney from "../images/courtney.jpg";

export default function Team(props) {
    return (
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

            <Link activeClass="active" to="partners" spy={true} smooth={true} offset={0} duration={500}>
                <i className="fas fa-chevron-down bounce"></i>
            </Link>
        </section>
    )
}