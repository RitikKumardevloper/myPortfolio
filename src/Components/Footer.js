import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <>
            <footer className="site-footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-section-about">
                            <h6>About Me</h6>
                            <p>
                                I'm a BCA student passionate about web development and creating dynamic web applications.
                            </p>
                        </div>
                        
                       

                        <div className="footer-section-links">
                            <ul className="footer-links">
                                <nav className="hover">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/projects">Projects</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </nav>
                            </ul>
                        </div>

                        <div className="footer-section-contact">
                            <h6>Contact Me</h6>
                            <p>Email: <a href="mailto:your-email@example.com">your-email@example.com</a></p>
                            <p>Phone: +123 456 7890</p>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2024 Your Name. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
