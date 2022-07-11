import React from 'react';
import '../styles/Services.scss';
import { useState } from 'react';
import { Link } from 'react-scroll';

export default function Services(props) {
    const [isFlipped1, flipCard1] = useState(false);
    const [isFlipped2, flipCard2] = useState(false);
    const [isFlipped3, flipCard3] = useState(false);
    const [isFlipped4, flipCard4] = useState(false);

    return (
        <section id={props.id}>
            <h3>Services</h3>
            <ul className="list">
                
                <li className={ isFlipped1 ? 'item show flip' : 'item'}>
                    { isFlipped1 ?  <div>
                        <h4>Brand Building</h4>
                        <ul>
                            <li><i className="fas fa-check"></i> Brand Audit</li>
                            <li><i className="fas fa-check"></i> Go-to-Market Strategy Development</li>
                            <li><i className="fas fa-check"></i> Creative Design &amp; Asset Development</li>
                            <li><i className="fas fa-check"></i> Promotion, Communication and Advertising</li>
                        </ul> </div> : 
                        <> 
                            <h4>Brand Building</h4>
                            <p>Find, fine-tune, captivate and optimize opportunities within the market that align with your brand’s fingerprint. For up and coming brands, or established brands looking to grow, our brand building services will provide the foundational insights to help you build your dream. Let us do the heavy lifting.</p>    
                        </>
                    }
                    <button onClick={() => flipCard1(!isFlipped1)}>
                        { isFlipped1 ? 'Back' : 'View More' }
                        { !isFlipped1 && <i className="fas fa-chevron-right"></i>}
                    </button> 
                </li>
                <li className={ isFlipped2 ? 'item show flip' : 'item' }>
                    { isFlipped2 ? <div>
                        <h4>Platform &amp; Media Design</h4>
                        <ul>
                            <li><i className="fas fa-check"></i> Social Media Development</li>
                            <li><i className="fas fa-check"></i> Website Development</li>
                            <li><i className="fas fa-check"></i> Podcast Development</li>
                        </ul> </div> : 
                        <div>
                            <h4>Platform &amp; Media Design</h4>
                            <p>Connect with your customers and attract new ones by optimizing your media and retail platform functionality and incorporating an engaging customer experience. Let’s conceptualise, collaborate and tell your story through the build of reinvisioned media.</p>
                        </div>
                    }
                    <button onClick={() => flipCard2(!isFlipped2)}>
                        { isFlipped2 ? 'Back' : 'View More' }
                        { !isFlipped2 && <i className="fas fa-chevron-right"></i> }
                    </button>
                </li>
                <li className={ isFlipped3 ? 'item show flip' : 'item' }>
                    { isFlipped3 ? <div>
                        <h4>Educational Development Services</h4>
                        <ul>
                            <li><i className="fas fa-check"></i> Product Development</li>
                            <li><i className="fas fa-check"></i> Content Development</li>
                        </ul> </div> : 
                        <>
                            <h4>Educational Development Services</h4>
                            <p>Formulating and curating. From helping to develop product formulations to co-writing your unique education curriculum, Social Art House has a collective 20+ years of experience developing education for the industries most influential global product launches and talent.</p>
                        </>
                    }
                    <button onClick={() => flipCard3(!isFlipped3)}>
                        { isFlipped3 ? 'Back' : 'View More'}
                        { !isFlipped3 && <i className="fas fa-chevron-right"></i> }
                    </button>
                </li>
                <li className={ isFlipped4 ? 'item show flip' : 'item' }>
                    { isFlipped4 ? <div>
                        <h4>Shows, Events, &amp; Production</h4>
                        <ul>
                            <li><i className="fas fa-check"></i> Show Development</li>
                            <li><i className="fas fa-check"></i> Event Development</li>
                            <li><i className="fas fa-check"></i> Technical Development</li>
                        </ul> </div> : 
                        <>
                            <h4>Shows, Events, &amp; Production</h4>
                            <p>You're worth your weight in gold. Let us help monetize your education and concepts and bring them to life, virtually or on-location. From event and show development, technical production, or management of all of the above, we support you and your vision–where there’s a will there’s a way… no job is too small, no dream too big.</p>
                        </>
                    }
                    <button onClick={() => flipCard4(!isFlipped4)}> 
                        { isFlipped4 ? 'Back' : 'View More ' }
                        { !isFlipped4 && <i className="fas fa-chevron-right"></i> }
                    </button>
                </li>
            </ul>

            <Link activeclassname="active" to="contact" spy={true} smooth={true} offset={0} duration={500}>
                <i className="fas fa-chevron-down bounce"></i>
            </Link>
        </section>
    )
}