import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import { useSpring, animated } from 'react-spring';
import videoSrc from '../videos/Black.mp4';

export default function Header() {
    const [videoProps, setVideoProps] = useSpring(() => ({ 
        opacity: 1,
        zIndex: 100 
    }));
    const textProps = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } });

    const handleInteraction = () => {
        setVideoProps({ 
            opacity: 0, 
            zIndex: -1 
        });
    };

    useEffect(() => {
        const eventHandler = (e) => {
            handleInteraction();
            // Removing event listeners after the first interaction
            window.removeEventListener('mousemove', eventHandler);
            window.removeEventListener('click', eventHandler);
            window.removeEventListener('touchstart', eventHandler);
        };

        // Add both mouse and touch event listeners
        window.addEventListener('mousemove', eventHandler);
        window.addEventListener('click', eventHandler);
        window.addEventListener('touchstart', eventHandler);

        return () => {
            // Remove the event listeners on cleanup
            window.removeEventListener('mousemove', eventHandler);
            window.removeEventListener('click', eventHandler);
            window.removeEventListener('touchstart', eventHandler);
        };
    }, []);

    return (
        <>
            <animated.div className='video-wrap' style={{ 
                ...videoProps, 
                position: 'fixed', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '100%',
                backgroundColor: "#000" 
            }}>
                <video src={videoSrc} autoPlay muted loop style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover'
                }}>
                </video>
            </animated.div>
            <animated.div style={textProps}>
                <header id="header">
                    <h2>Build Your Dream</h2>
                    <h3>We Offer an Expansive Consulting Experience for Brands Through <span>Ingenuity, Originality, and Imagination</span></h3>

                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500}>
                        <i className="fas fa-chevron-down bounce"></i>
                    </Link>
                </header>
            </animated.div>
        </>
    );
}
