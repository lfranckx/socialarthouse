import React from 'react';
import '../styles/Partners.scss';
import { useState, useRef } from 'react';

export default function Partners(props) {
    const [isOpen, setIsOpen] = useState(false);
    const collapsibleRef = useRef();

    return (
        <section id="partners">
            <h3>Our Brand Partners</h3>
            <div className="container">
                <div>
                    <a href="https://www.dyson.com/" target="_blank" rel="noopener noreferrer">
                        <img className="partner-logo" src='images/partners/dyson.png' alt="dyson" />
                    </a>
                </div>
                <div>
                    <a href="https://www.ulta.com/" target="_blank" rel="noopener noreferrer">
                        <img className="partner-logo" src='images/partners/ulta.png' alt="ulta-beauty" />
                    </a>
                </div>
                <div>
                    <a href="https://us.lorealprofessionnel.com/" target="_blank" rel="noopener noreferrer">
                        <img className="partner-logo" src='images/partners/loreal.png' alt="loreal-professional" />
                    </a>
                </div>
                <div>
                    <a href="https://www.redken.com/" target="_blank" rel="noopener noreferrer">
                        <img className="partner-logo" src='images/partners/redken.png' alt="redken" />
                    </a>
                </div>
                <div>
                    <a href="https://www.bumbleandbumble.com/" target="_blank" rel="noopener noreferrer">
                        <img className="partner-logo" src='images/partners/bab.png' alt="bumble-and-bumble" />
                    </a>
                </div>
                <div>
                    <a href="https://www.kerastase-usa.com/" target="_blank" rel="noopener noreferrer">
                        <img className="partner-logo" src='images/partners/kerastase.png' alt="kerastase-paris" />
                    </a>
                </div>
                
            </div>
            <div 
                ref={collapsibleRef} 
                style={isOpen 
                    ? {
                        height: collapsibleRef.current.scrollHeight + 'px',
                    } : {
                        height: '0px',
                        margin: '0px auto'
                    }}
                className={"content"}>
                <div>
                    <a href="https://www.matrix.com/" target="_blank" rel="noopener noreferrer">
                        <img className="partner-logo" src='images/partners/matrix.png' alt="matrix" />
                    </a>
                </div>
                <div>
                    <a href="https://www.beautyquestgroup.com/" target="_blank" rel="noopener noreferrer">
                        <img className="partner-logo" src='images/partners/bqg_logo.png' alt="bqg-logo" />
                    </a> 
                </div>
                <div>
                    <a href="https://www.miladypro.com/" target="_blank" rel="noopener noreferrer">
                        <img className="partner-logo" src='images/partners/miladypro.png' alt="milady-pro" />
                    </a>
                </div>
                <div>
                    <a href="https://www.bioionic.com/" target="_blank" rel="noopener noreferrer">
                        <img className="partner-logo" src='images/partners/Bioionic.png' alt="bio-ionic" />
                    </a>
                </div>
                <div>
                    <a href="https://www.ouidad.com/" target="_blank" rel="noopener noreferrer">
                        <img className="partner-logo" src='images/partners/ouidad.png' alt="ouidad" />
                    </a>
                </div>
                <div>
                    <a href="https://www.joico.com/" target="_blank" rel="noopener noreferrer">
                        <img className="partner-logo" src='images/partners/joico.png' alt="joico" />
                    </a>
                </div>
                <div>
                    <a href="https://johnnyramirez.com/" target="_blank" rel="noopener noreferrer">
                        <img className="partner-logo" src='images/partners/johnny-ramirez.png' alt="johnny-ramirez-california" />
                    </a>
                </div>
                <div>
                    <a href="https://www.genejuarez.com/" target="_blank" rel="noopener noreferrer">
                        <img className="partner-logo" src='images/partners/genejuarez.png' alt="gene-juarez" />
                    </a>
                </div>
                <div>
                    <a href="https://forevercurlsbyleysa.com/" target="_blank" rel="noopener noreferrer">
                        <img className="partner-logo" src='images/partners/leysa-crop.png' alt="leysa-carillo" />
                    </a>
                </div>
                <div>
                    <a href="https://www.keune.com/" target="_blank" rel="noopener noreferrer">
                        <img className="partner-logo" src='images/partners/keune.png' alt="keune-hair-cosmetics" />
                    </a>
                </div>
                <div>
                    <a href='https://frommbeauty.com/' target="_blank" rel="noopener noreferrer">
                        <img className="partner-logo" src='images/partners/fromm.png' alt="fromm" />
                    </a>
                </div>
                <div>
                    <a href="https://www.cuveebeauty.com/" target="_blank" rel="noopener noreferrer">
                        <img className="partner-logo" src='images/partners/cuvee.png' alt="cuvee-beauty" />
                    </a>
                </div>
                <div></div>
                <div>
                    <a href="https://www.groupe-provalliance.com/fr/" target="_blank" rel="noopener noreferrer">
                        <img className="partner-logo" src='images/partners/provalliance.png' alt="provalliance" />
                    </a>
                </div>
            </div>
                        
            <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Close' : 'And More' }
                { !isOpen && <span><i id="partners-down-arrow" className="fas fa-chevron-down bounce"></i></span> }
            </button>
        </section>
    );
}