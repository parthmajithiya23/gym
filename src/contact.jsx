import "./contact.css";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
    useEffect(() => {
        AOS.init({
            duration: 500,
            once: true,
        });
    }, []);

    return (
        <section className="contact-section">
            <motion.div
                className="contact-card"
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.5,
                    ease: "easeOut"
                }}
            >
                <h2 data-aos="fade-down">START YOUR FITNESS JOURNEY</h2>

                <p className="contact-subtitle">
                    Join Sanatan Fitness and transform yourself.
                </p>

                <form>
                    <div className="row">
                        <div className="input-box">
                            <input type="text" required />
                            <label>First Name</label>
                        </div>

                        <div className="input-box">
                            <input type="text" required />
                            <label>Last Name</label>
                        </div>
                    </div>

                    <div className="input-box">
                        <input type="email" required />
                        <label>Email Address</label>
                    </div>

                    <div className="input-box">
                        <input type="tel" required />
                        <label>Mobile Number</label>
                    </div>

                    <div className="row">
                        <div className="input-box">
                            <span className="field-title">Date of Birth</span>
                            <input type="date" required />
                        </div>

                        <div className="input-box">
                            <span className="field-title">Joining Date</span>
                            <input type="date" required />
                        </div>
                    </div>

                    <div className="input-box">
                        <span className="field-title">Preferred Workout Time</span>
                        <input type="time" required />
                    </div>
                    
                    <div className="row">
                        <select defaultValue="">
                            <option value="" disabled>
                                Select Gender
                            </option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>

                        <select defaultValue="">
                            <option value="" disabled>
                                Fitness Goal
                            </option>
                            <option>Weight Loss</option>
                            <option>Muscle Gain</option>
                            <option>Strength Training</option>
                            <option>General Fitness</option>
                        </select>
                    </div>

                    <div className="row">
                        <div className="input-box">
                            <input type="number" required />
                            <label>Current Weight (kg)</label>
                        </div>

                        <div className="input-box">
                            <input type="number" required />
                            <label>Target Weight (kg)</label>
                        </div>
                    </div>

                    <div className="input-box">
                        <textarea rows="5" required></textarea>
                        <label>Tell us about your fitness goals...</label>
                    </div>

                    <button type="submit" className="c-btn">
                        JOIN NOW
                    </button>
                </form>

                <div className="contact-info">
                    <div className="info-box">
                        <h3>📍 Address</h3>
                        <p>Your Gym Address Here</p>
                    </div>

                    <div className="info-box">
                        <h3>📞 Phone</h3>
                        <p>+91 98765 43210</p>
                    </div>

                    <div className="info-box">
                        <h3>📧 Email</h3>
                        <p>info@sanatanfitness.com</p>
                    </div>

                    <div className="info-box">
                        <h3>🕒 Gym Hours</h3>
                        <p>Mon - Sat : 5 AM - 11 PM</p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default Contact;