import React from 'react';
import '../styles/Homepage.scss';
import { Link }from 'react-router-dom';

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

                <section id="services">
                    <h3>Services</h3>

                    <ul>
                        <li>
                            <h4>Brand Buildings</h4>
                            <p>Find, fine-tune, captivate and optimize opportunities within the market that align with your brand’s fingerprint. For up and coming brands, or established brands looking to grow, our brand building services will provide the foundational insights to help you build your dream. Let us do the heavy lifting.</p>
                            <button>View More <i class="fas fa-chevron-right"></i></button>
                        </li>
                        <li>
                            <h4>Platform &amp; Media Design</h4>
                            <p>Connect with your customers and attract new ones by optimizing your media and retail platform functionality and incorporating an engaging customer experience. Let’s conceptualise, collaborate and tell your story through the build of reinvisioned media.</p>
                            <button>View More <i class="fas fa-chevron-right"></i></button>
                        </li>
                        <li>
                            <h4>Educational Development Services</h4>
                            <p>Formulating and curating. From helping to develop product formulations to co-writing your unique education curriculum, Social Art House has a collective 20+ years of experience developing education for the industries most influential global product launches and talent.</p>
                            <button>View More <i class="fas fa-chevron-right"></i></button>
                        </li>
                        <li>
                            <h4>Shows, Events, &amp; Production</h4>
                            <p>Your worth your weight in gold. Let us help monetize your educaucation and concepts and bring them to life, virtually or on-location. From event and show development, technical production, or management of all of the above, we support you and your vision–where there’s a will there’s a way… no job is too small, no dream too big.</p>
                            <button>View More <i class="fas fa-chevron-right"></i></button>
                        </li>
                    </ul>
                </section>

                <section id="contact">
                    <h3>Need to Connect?</h3>

                    <div >
                        <Link className="btn-big" to={Homepage}>Schedule a Call</Link>
                    </div>
                </section>

                <section id="team">
                    <div>
                        <img src="" alt="maria" />
                        <img src="" alt="justine" />
                        <img src="" alt="marlene" />
                        <img src="" alt="courtney" />
                    </div>
                </section>
            </main>
        </div>
    );
}