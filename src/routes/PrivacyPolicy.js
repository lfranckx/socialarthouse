import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { Helmet } from 'react-helmet';

import '../styles/PrivacyPolicy.scss';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    const props = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } });

    return (
        <>
            <Helmet >
                <title>Privacy Policy | Social Art House</title>
                <meta name='description' content="Learn how Social Art House uses and protects your personal data when you shop on our Facebook and Instagram." />
                <meta name='keywords' content="Beauty Industry Agency, Hairstyling Creative Agency, Beauty Product Marketing, Social Media Influencers Beauty, Hair and Beauty Experts, Professional Beauty Consultants, Influencer Marketing Services, Beauty Brand Promotions, Hair Stylist Branding, Beauty Influencer Collaborations, Luxury Beauty Marketing, Social Media Beauty Campaigns, Celebrity Hairstylist Marketing, Top Beauty Industry Agency, Beauty Educator Promotions." />
            </Helmet>

            <main> 
                <animated.div style={props} id="privacy-policy">
                    
                    <h2 className='text-center'>Privacy Policy</h2>
                        
                    <div className='container'>
                        <h3>Effective Date: April 18, 2024</h3>
                        <p>Welcome to Social Art House. We respect your privacy and are committed to protecting your personal information. This privacy policy outlines our practices concerning the collection, use, and sharing of your information through our operations, which include our website, mobile application, and our related services (collectively, “Services”), when you shop via our Facebook and Instagram shop.</p>
                    </div>

                    <div className='container'>
                        <h3>Information We Collect</h3>
                        <p>When you make a purchase through our Facebook or Instagram shop, we collect the following information:</p>
                        <ul>
                            <li><strong>Personal Identification Information:</strong> Name, shipping address, billing address, email address, and telephone number.</li>
                            <li><strong>Payment Information:</strong> Credit card details, payment processor details (these are processed by our secure payment processors and not held by us).</li>
                            <li><strong>Transactional Data:</strong> Details about the products you purchase and the transaction amount.</li>
                        </ul>
                    </div>

                    <div className='container'>
                        <h3>How We Use Your Information</h3>
                        <p>We use the information we collect for various purposes:</p>
                        <ul>
                            <li>To process and fulfill your order, including managing payments and shipping.</li>
                            <li>To communicate with you about your order.</li>
                            <li>To include you in our email marketing list, which provides updates, promotions, and other marketing emails. You will be automatically opted into this list when making a purchase, but you can unsubscribe at any time by following the unsubscribe link in any of our emails.</li>
                        </ul>
                    </div>

                    <div className='container'>
                        <h3>Sharing of Your Information</h3>
                        <p>We may share your information with:</p>
                        <ul>
                            <li>Service providers and partners who assist us in order fulfillment and payment processing.</li>
                            <li>Our email marketing platform, to manage and send emails to you.</li>
                        </ul>
                        <p>We do not sell or rent personal information to third parties for their marketing purposes without your explicit consent.</p>
                    </div>

                    <div className='container'>
                        <h3>Your Rights and Choices</h3>
                        <p>You have certain rights regarding the personal information we hold about you. These may include the right:</p>
                        <ul>
                            <li>To request access to the information we hold about you.</li>
                            <li>To request that we rectify or update any information you believe is inaccurate or incomplete.</li>
                            <li>To request the deletion of your personal information.</li>
                            <li>To opt-out of being included in our email marketing list.</li>
                        </ul>
                    </div>

                    <div className='container'>
                        <h3>Security</h3>
                        <p>We take the security of your personal information seriously and implement various security measures to protect it from unauthorized access, alteration, or destruction.</p>
                    </div>

                    <div className='container'>
                        <h3>Changes to This Privacy Policy</h3>
                        <p>We may update this privacy policy from time to time in response to changing legal, technical, or business developments. When we update our privacy policy, we will take appropriate measures to inform you, consistent with the significance of the changes we make.</p>
                    </div>

                    <div className='container'>
                        <h3>Contact Us</h3>
                        <p>If you have any questions or concerns about our use of your personal information, please contact us at <span><a href='marlene@socialarthose.com' aria-label='Our support email'>marlene@socialarthose.com</a></span> or fill out our <span><Link to='/contact'>Contact Form</Link></span>.</p>
                    </div>
                </animated.div>
            </main>
        </>
    );
}

export default PrivacyPolicy;