import React from 'react'
import './Footer.css';
import { Button } from './Button.js';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure newsletter to receive our best vacation deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Email" className="footer-input" />
                        <Button buttonStyle="btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                        <a href='https://www.instagram.com/skandhopaneya_/' target='_blank' rel="noreferrer">Instagram</a>
                        <a href='https://www.facebook.com/skandhopaneya/' target='_blank' rel="noreferrer">Facebook</a>
                        <a href='https://www.facebook.com/skandhopaneya/' target='_blank' rel="noreferrer">Youtube</a>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            Skandhopaneya <i className="fab fa-typo3" />
                        </Link>
                    </div>
                    <small className="website-rights">
                        Skandhopaneya ?? 2021
                    </small>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/skandhopaneya/" target="_blank" rel="noreferrer" className='social-icon-link facebook'>
                            <i className='fab fa-facebook-f' />
                        </a>
                        <a href="https://www.instagram.com/skandhopaneya_/" target="_blank" rel="noreferrer" className='social-icon-link facebook'>
                            <i className="fab fa-instagram" />
                        </a>

                        <a href="https://www.facebook.com/skandhopaneya/" target="_blank" rel="noreferrer" className='social-icon-link facebook'>
                            <i className="fab fa-youtube" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
