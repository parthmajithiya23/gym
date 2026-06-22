import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, } from "react-icons/fa";
import logo2 from './assets/logo2.png';
import footerMan from "./assets/footerman.png";
import './App.css';
import { Link } from "react-router-dom";


function Footer() {
    return (

        <>
            {/* footer */}

            <footer className="footer" >

                <div className="footer-container">

                    {/* Logo & About */}
                    <div className="footer-col">
                        <img src={logo2} alt="Sanatan Gym" className="footer-logo" />

                        <p>
                            Strength, discipline and fitness come together at
                            Sanatan Gym. Let's build a stronger and healthier
                            tomorrow together.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h3>QUICK LINKS</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/accessories">Accessories</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/plans">Plans</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Programs */}
                    <div className="footer-col">
                        <h3>PROGRAMS</h3>
                        <ul>
                            <li><Link to="/strength-training">Strength Training</Link></li>
                            <li><Link to="/cardio-training">Cardio Training</Link></li>
                            <li><Link to="/functional-fitness">Functional Fitness</Link></li>
                            <li><Link to="/yoga-meditation">Yoga & Meditation</Link></li>
                            <li><Link to="/diet-plan">Diet Consultation</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-col">
                        <h3>CONTACT US</h3>

                        <p><FaPhoneAlt className="contact-icon" /> +91 98765 43210</p>

                        <p><FaEnvelope className="email-icon" /> info@sanatangym.com</p>

                        <p>
                            <FaMapMarkerAlt className="address-icon" />
                            123, Fitness Street <br />
                            Surat, Gujarat - 395001
                        </p>

                    </div>

                    <div className="footer-col social-section">
                        <h3>FOLLOW US</h3>

                        <div className="social-icons">
                            <a href="https://www.facebook.com/"><FaFacebookF /></a>
                            <a href="https://www.instagram.com/"><FaInstagram /></a>
                            <a href="https://www.youtube.com/"><FaYoutube /></a>
                            <a href="https://web.whatsapp.com/"><FaWhatsapp /></a>
                        </div>

                        <img
                            src={footerMan}
                            alt="Gym Model"
                            className="footer-man"
                        />
                    </div>
                </div>

            </footer >
        </>
    )
}
export default Footer;

