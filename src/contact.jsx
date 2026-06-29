import "./contact.css";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

function Contact() {
    const form = useRef();

    const location = useLocation();
    const defaultPlan = location.state?.selectedPlan || "";

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);

        const newInquiry = {
            id: Date.now(),
            name: `${formData.get("firstName")} ${formData.get("lastName")}`,
            email: formData.get("email"),
            phone: formData.get("mobile"),
            dob: formData.get("dob"),
            gender: formData.get("gender"),
            joiningDate: formData.get("joiningDate"),
            workoutTime: formData.get("workoutTime"),
            goal: formData.get("goal"),
            plan: formData.get("plan"),
            currentWeight: formData.get("currentWeight"),
            targetWeight: formData.get("targetWeight"),
            message: formData.get("message"),
            date: new Date().toLocaleDateString()
        };

        const existingInquiries = JSON.parse(localStorage.getItem("gym_inquiries")) || [];
        localStorage.setItem("gym_inquiries", JSON.stringify([newInquiry, ...existingInquiries]));

        form.current.reset();
        alert("તમારો મેસેજ સફળતાપૂર્વક મોકલાઈ ગયો છે! અમે ટૂંક સમયમાં તમારો સંપર્ક કરીશું.");
    };

    return (
        <section className="contact-section" style={{ overflowX: "hidden" }}>
            <motion.div
                className="contact-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.5,
                    ease: "easeOut"
                }}
            >
                <h2 data-aos="fade-down">START YOUR FITNESS JOURNEY</h2>
                <p className="contact-subtitle" data-aos="fade-up" data-aos-delay="50">
                    Join Sanatan Fitness and transform yourself.
                </p>

                <form ref={form} onSubmit={handleFormSubmit}>
                    <div className="row" data-aos="fade-up" data-aos-delay="100">
                        <div className="input-box">
                            <input type="text" name="firstName" required />
                            <label>First Name</label>
                        </div>

                        <div className="input-box">
                            <input type="text" name="lastName" required />
                            <label>Last Name</label>
                        </div>
                    </div>

                    <div className="input-box" data-aos="fade-up" data-aos-delay="150">
                        <input type="email" name="email" required />
                        <label>Email Address</label>
                    </div>

                    <div className="input-box" data-aos="fade-up" data-aos-delay="150">
                        <input type="tel" name="mobile" required />
                        <label>Mobile Number</label>
                    </div>

                    <div className="row" data-aos="fade-up" data-aos-delay="200">
                        <div className="input-box">
                            <span className="field-title">Date of Birth</span>
                            <input type="date" name="dob" required />
                        </div>

                        <div className="input-box">
                            <span className="field-title">Joining Date</span>
                            <input type="date" name="joiningDate" required />
                        </div>
                    </div>

                    <div className="input-box" data-aos="fade-up" data-aos-delay="200">
                        <span className="field-title">Preferred Workout Time</span>
                        <input type="time" name="workoutTime" required />
                    </div>

                    <div className="row" data-aos="fade-up" data-aos-delay="250">
                        <select name="plan" required defaultValue={defaultPlan}>
                            <option value="" disabled>Select Membership Plan</option>
                            <option value="Monthly Plan">Monthly Plan</option>
                            <option value="Standard Plan">Standard Plan</option>
                            <option value="Premium Plan">Premium Plan</option>
                            <option value="Annual Plan">Annual Plan</option>
                        </select>

                        <select name="gender" required defaultValue="">
                            <option value="" disabled>Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="row" data-aos="fade-up" data-aos-delay="250">
                        <select name="goal" required defaultValue="">
                            <option value="" disabled>Fitness Goal</option>
                            <option value="Weight Loss">Weight Loss</option>
                            <option value="Muscle Gain">Muscle Gain</option>
                            <option value="Strength Training">Strength Training</option>
                            <option value="General Fitness">General Fitness</option>
                        </select>
                    </div>

                    <div className="row" data-aos="fade-up" data-aos-delay="300">
                        <div className="input-box">
                            <input type="number" name="currentWeight" required />
                            <label>Current Weight (kg)</label>
                        </div>

                        <div className="input-box">
                            <input type="number" name="targetWeight" required />
                            <label>Target Weight (kg)</label>
                        </div>
                    </div>

                    <div className="input-box" data-aos="fade-up" data-aos-delay="300">
                        <textarea name="message" rows="5" required></textarea>
                        <label>Tell us about your fitness goals...</label>
                    </div>

                    <button type="submit" className="c-btn" data-aos="zoom-in" data-aos-delay="350">
                        JOIN NOW
                    </button>
                </form>

                <div className="contact-info">
                    <div className="info-box" data-aos="zoom-in" data-aos-delay="100">
                        <h3>📍 Address</h3>
                        <p>Your Gym Address Here</p>
                    </div>

                    <div className="info-box" data-aos="zoom-in" data-aos-delay="150">
                        <h3>📞 Phone</h3>
                        <p>+91 98765 43210</p>
                    </div>

                    <div className="info-box" data-aos="zoom-in" data-aos-delay="200">
                        <h3>📧 Email</h3>
                        <p>info@sanatanfitness.com</p>
                    </div>

                    <div className="info-box" data-aos="zoom-in" data-aos-delay="250">
                        <h3>🕒 Gym Hours</h3>
                        <p>Mon - Sat : 5 AM - 11 PM</p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default Contact;