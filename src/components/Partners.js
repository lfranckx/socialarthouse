import React from 'react';
import '../styles/Partners.scss';
// import { useState, useRef } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import dyson from '../images/partners/dyson.png';
import bumble from '../images/partners/bab.png';
import ker from '../images/partners/kerastase.png';
import ouidad from '../images/partners/ouidad.png';
import keune from '../images/partners/keune.png';
import fromm from '../images/partners/fromm.png';
import american from '../images/partners/new-2023/AmericanSalon.png';
import salonevo from '../images/partners/new-2023/SalonEvo.png';
import behind from '../images/partners/new-2023/behindthechair.png';
import modern from '../images/partners/new-2023/ModernSalon.png';
import bqg from '../images/partners/new-2023/BCG.png';
import samsung from '../images/partners/new-2023/Samsung 1.png';
import goldwell from '../images/partners/new-2023/Goldwell 1.png';
import mizani from '../images/partners/new-2023/Mizani 1.png';
import lorealproducts from '../images/partners/new-2023/LorealProducts 1.png';
import lorealparis from '../images/partners/new-2023/loreal-paris-white.png';
import redkenwhite from '../images/partners/new-2023/redken-white.png';
import milady from '../images/partners/new-2023/milady-new.png';
import matrix from '../images/partners/new-2023/matrix-white.png';
import joico from '../images/partners/new-2023/joico-white.png';
import furt from '../images/partners/new-2023/furterer-white.png';
import johnny from '../images/partners/johnny-ramirez.png';
import academy from '../images/partners/new-2023/academy-white.png';
import malibu from '../images/partners/new-2023/Malibu 1.png';
import abs from '../images/partners/new-2023/new/abs.png';
import gac from '../images/partners/new-2023/new/gac.png';
import jeli from '../images/partners/new-2023/new/jeli.png';
import premiere from '../images/partners/new-2023/new/premiere.png';
import the from '../images/partners/new-2023/new/the.png';
import tsa from '../images/partners/new-2023/new/tsa.png';


export default function Partners(props) {
    // const [isOpen, setIsOpen] = useState(false);
    // const collapsibleRef = useRef();

    return (
        <section id="partners">
            <h3>Our Brand Partners</h3>
            <div className="container">
                <div>
                    <a href="https://www.americansalon.com/" target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={american} alt="American Salon" />
                    </a>
                </div>
                <div>
                    <a href="https://salon-evo.com/" target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={salonevo} alt="Salon Evo" />
                    </a>
                </div>
                <div>
                    <a href="https://behindthechair.com/" target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={behind} alt="Behind the Chair" />
                    </a>
                </div>
                <div>
                    <a href="https://modernsalon.com/" target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={modern} alt="Modern Salon" />
                    </a>
                </div>
                <div>
                    <a href="https://www.keune.com/" target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={keune} alt="Keune Hair Cosmetics" />
                    </a>
                </div>
                <div>
                    <a href="https://www.beautyquestgroup.com/" target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={bqg} alt="Beauty Quest Group" />
                    </a>
                </div>
                <div>
                    <a href="https://www.miladypro.com/" target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={milady} alt="Milady" />
                    </a>
                </div>
                <div>
                    <a href='https://frommbeauty.com/' target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={fromm} alt="FROMM" />
                    </a>
                </div>
                <div>
                    <a href='https://www.samsung.com/us/' target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={samsung} alt="Samsung" />
                    </a>
                </div>
                <div>
                    <a href='https://www.goldwell.com/en-us/home/' target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={goldwell} alt="Goldwell" />
                    </a>
                </div>
                <div>
                    <a href='https://mizani.com/' target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={mizani} alt="Mizani" />
                    </a>
                </div>
                <div>
                    <a href='https://us.lorealprofessionnel.com/' target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={lorealproducts} alt="Loreal Professional Products" />
                    </a>
                </div>
                <div>
                    <a href='https://www.lorealparisusa.com/' target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={lorealparis} alt="Loreal Paris" />
                    </a>
                </div>
                <div>
                    <a href="https://www.kerastase-usa.com/" target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={ker} alt="kerastase-paris" />
                    </a>
                </div>
                <div>
                    <a href="https://www.dyson.com/" target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={dyson} alt="Dyson" />
                    </a>
                </div>
                <div>
                    <a href="https://www.bumbleandbumble.com/" target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={bumble} alt="bumble-and-bumble" />
                    </a>
                </div>
                <div>
                    <a href="https://www.ouidad.com/" target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={ouidad} alt="ouidad" />
                    </a>
                </div>
                <div>
                    <a href="https://www.joico.com/" target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={joico} alt="joico" />
                    </a>
                </div>
                <div>
                    <a href="https://www.matrix.com/" target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={matrix} alt="matrix" />
                    </a>
                </div>
                <div>
                    <a href="https://www.redken.com/" target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={redkenwhite} alt="redken" />
                    </a>
                </div>
                <div>
                    <a href="https://www.matrix.com/" target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={furt} alt="matrix" />
                    </a>
                </div>
                <div>
                    <a href="https://johnnyramirez.com/" target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={johnny} alt="johnny-ramirez-california" />
                    </a>
                </div>
                <div>
                    <a href="https://forevercurlsbyleysa.com/" target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={academy} alt="leysa-carillo" />
                    </a>
                </div>
                <div>
                    <a href="https://malibuc.com/" target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={malibu} alt="Malibu C" />
                    </a>
                </div>

                <div>
                    <a href="https://www.americasbeautyshow.com/" target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={abs} alt="America's Beauty Show" />
                    </a>
                </div>
                <div>
                    <a href="https://www.texturedhairelevated.com/global-artistry-council" target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={gac} alt="Global Artistry Council" />
                    </a>
                </div>
                <div>
                    <a href="https://jeli.io" target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={jeli} alt="Jeli" />
                    </a>
                </div>
                <div>
                    <a href="https://www.premiereshows.com/en/home.html" target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={premiere} alt="Premiere Show Group" />
                    </a>
                </div>
                <div>
                    <a href="https://texturedhairelevated.com" target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={the} alt="Textured Hair Elevated" />
                    </a>
                </div>
                <div>
                    <a href="https://texturestyleawards.com" target="_blank" rel="noopener noreferrer">
                        <LazyLoadImage effect="blur" className="partner-logo" src={tsa} alt="Texture Style Awards" />
                    </a>
                </div>
            </div>

            {/* <div 
                ref={collapsibleRef} 
                style={isOpen 
                    ? {
                        height: collapsibleRef.current.scrollHeight + 'px',
                    } : {
                        height: '0px',
                        margin: '0px auto'
                    }}
                className={"content"}>
            </div>
                        
            <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Close' : 'And More' }
                { !isOpen && <span><i id="partners-down-arrow" className="fas fa-chevron-down bounce"></i></span> }
            </button> */}
        </section>
    );
}