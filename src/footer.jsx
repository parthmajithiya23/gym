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
                            <li><Link to="/About">About</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/accessories">Accessories</Link></li>
                            <li>services</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                    {/* Programs */}
                    <div className="footer-col">
                        <h3>PROGRAMS</h3>
                        <ul>
                            <li>Strength Training</li>
                            <li>Cardio Training</li>
                            <li>Functional Fitness</li>
                            <li>Yoga & Meditation</li>
                            <li>Diet Consultation</li>
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
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaYoutube /></a>
                            <a href="#"><FaWhatsapp /></a>
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

