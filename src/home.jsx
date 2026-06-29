import { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import './App.css';
import gymlg from './assets/gymlg.png';
import timage from './assets/timage.avif';
import stregnth from './assets/strength.webp';
import crd from './assets/crd.jpg';
import fnc from './assets/functional.jpg'
import yoga from './assets/yoga.jpg';
import diet from './assets/diet.avif';
import { Link } from "react-router-dom";
import bgImage from './assets/main.avif';
import m1 from './assets/member1.png';
import m2 from './assets/member2.png';
import trainer1 from './assets/trainer1.jpg';
import trainer2 from './assets/trainer2.jpg';
import trainer3 from './assets/trainer3.webp';
import beforeAfter1 from './assets/beforeAfter1.webp';
import beforeAfter2 from './assets/beforeAfter2.png';
import beforeAfter3 from './assets/beforeAfter3.jpg';
import beforeAfter4 from './assets/beforeAfter4.png';
import gymImage from './assets/result.jpeg';
import GaugeComponent from "react-gauge-component";



function Home() {

    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") {
                setSelectedImage(null);
            }
        };

        window.addEventListener("keydown", handleEsc);

        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, []);


    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmi, setBmi] = useState(null);
    const [status, setStatus] = useState("");

    const calculateBMI = () => {
        const heightInMeters = height / 100;
        const bmiValue = Number(
            (
                weight /
                (heightInMeters * heightInMeters)
            ).toFixed(1)
        );
        setTimeout(() => {
            AOS.refresh();
        }, 100);

        setBmi(bmiValue);

        if (bmiValue < 18.5) {
            setStatus("Underweight");
        } else if (bmiValue < 25) {
            setStatus("Normal Weight");
        } else if (bmiValue < 30) {
            setStatus("Overweight");
        } else {
            setStatus("Obese");
        }
    };
    const statsRef = useRef(null);
    const [startCount, setStartCount] = useState(false);
    const [members, setMembers] = useState(0);
    const [trainers, setTrainers] = useState(0);
    const [experience, setExperience] = useState(0);
    const [transformations, setTransformations] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartCount(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.3,
            }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => observer.disconnect();
    }, []);
    useEffect(() => {
        if (!startCount) return;

        const interval = setInterval(() => {
            setMembers((prev) => (prev < 500 ? prev + 5 : 500));
            setTrainers((prev) => (prev < 3 ? prev + 3 : 3));
            setExperience((prev) => (prev < 5 ? prev + 1 : 5));
            setTransformations((prev) =>
                prev < 250 ? prev + 3 : 250
            );

        }, 30);

        return () => clearInterval(interval);
    }, [startCount]);

    return (
        <>
            <section className="hero">
                <div className="slide slide1"></div>
                <div className="slide slide2"></div>
                <div className="slide slide3"></div>
                <div className="slide slide4"></div>

                <div className="hero-content">
                    <h1>Welcome to <span>SANATAN GYM</span></h1>
                    <p>Train Hard, Stay Fit</p>
                </div>
            </section>

            {/* // home section */}
            <section>
                <div
                    className="home"

                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9) 15%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.9) 85%), url(${bgImage})`
                    }}
                >

                    {/* Left side */}
                    <div
                        className="left"
                        data-aos="fade-right"
                    >
                        <h1>
                            TRANSFORM YOUR BODY, <br />
                            TRANSFORM <span className="highlight-text"> YOUR LIFE💪</span>
                        </h1>

                        <p className="welcome-title">
                            Welcome to Sanatan Gym
                        </p>

                        <p className="welcome-desc">
                            — where strength, discipline, and fitness come together.
                            Whether you're a beginner or a professional athlete, we help you achieve your fitness goals with expert trainers, modern equipment, and motivating workouts.
                        </p>

                        <div className="buttons">
                            <button onClick={() => navigate("/plans")} className="btn-primary">JOIN NOW</button>
                            <button
                                className="btn-outline"
                                onClick={() =>
                                    document.querySelector(".program-section")
                                        .scrollIntoView({ behavior: "smooth" })
                                }
                            >
                                EXPLORE PROGRAMS
                            </button>
                        </div>
                    </div>
                    {/* Right side */}
                    <div
                        className='right'
                        data-aos="fade-left"
                    >
                        <div
                            className='choose'
                            data-aos="zoom-in"
                            data-aos-delay="200"
                        >
                            <h2 style={{ color: "#f1860a" }}>WHY CHOOSE US?</h2>
                            <ul>
                                <li>🏋️ Modern Gym Equipment</li>
                                <li>👨‍🏫 Certified Trainers</li>
                                <li>🥗 Diet & Nutrition Guidance</li>
                                <li>⏰ Flexible Membership Plans</li>
                                <li>🔥 Cardio, Strength & Functional Training</li>
                                <li>🧘 Yoga & Fitness Sessions</li>
                            </ul>
                        </div>

                        <div
                            className='ovrmsn'
                            data-aos="flip-up"
                            data-aos-delay="400"
                        >
                            <h3>OUR MISSION</h3>
                            <p>
                                At Sanatan Gym, our mission is to build a stronger and healthier community by inspiring people to stay fit, active, and confident every day.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
            {/* BMI calculator */}

            <section
                className="bmi-section"
                data-aos="fade-up"
            >
                <h2>
                    BMI <span>CALCULATOR</span>
                </h2>

                <div
                    className="bmi-card"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                >

                    <input
                        type="number"
                        placeholder="Enter Height (cm)"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                    />

                    <input
                        type="number"
                        placeholder="Enter Weight (kg)"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                    />

                    <button onClick={calculateBMI}>
                        Calculate BMI
                    </button>

                    {bmi && (
                        <>
                            <div
                                data-aos="flip-up"
                                data-aos-delay="300"
                            >
                                <GaugeComponent
                                    value={Number(bmi)}
                                    minValue={10}
                                    maxValue={40}
                                    type="semicircle"
                                    arc={{
                                        subArcs: [
                                            { limit: 18.5, color: "#3498db" },
                                            { limit: 25, color: "#2ecc71" },
                                            { limit: 30, color: "#f39c12" },
                                            { limit: 40, color: "#e74c3c" }
                                        ]
                                    }}
                                    labels={{
                                        valueLabel: {
                                            formatTextValue: () => bmi
                                        }
                                    }}
                                />
                            </div>

                            <div
                                className="result"
                                data-aos="fade-up"
                                data-aos-delay="500"
                            >
                                <h3>Your BMI: {bmi}</h3>
                                <p className={status.toLowerCase()}>{status}</p>
                            </div>
                        </>
                    )}

                </div>
            </section>


            {/* About Section */}

            <section className="about-section">

                {/* Left Image */}
                <div
                    className="left-side"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                >
                    <img src={timage} alt="Gym Training" />
                </div>

                {/* Center Content */}
                <div
                    className="center-side"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                >
                    <h2>
                        TRAIN HARD. <span>STAY STRONG.</span>
                    </h2>

                    <p>
                        Sanatan Gym is more than just a fitness center — it's a place where
                        dedication meets results. Our gym provides a motivating environment
                        with professional guidance to help members improve strength,
                        endurance, and overall health.
                    </p>
                </div>

                {/* Right Logo */}
                <div
                    className="right-side"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-delay="400"
                >
                    <img src={gymlg} alt="Sanatan Gym Logo" />
                </div>

            </section>

            {/* Statistics and Achievements section */}

            <section
                className="stats-section"
                ref={statsRef}
                data-aos="fade-up"
            >
                <div
                    className="stat-box"
                    data-aos="zoom-in"
                    data-aos-delay="100"
                >
                    <h2>{members}+</h2>
                    <p>Active Members</p>
                </div>

                <div
                    className="stat-box"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                >
                    <h2>{trainers}+</h2>
                    <p>Certified Trainers</p>
                </div>

                <div
                    className="stat-box"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                >
                    <h2>{experience}+</h2>
                    <p>Years Experience</p>
                </div>

                <div
                    className="stat-box"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                >
                    <h2>{transformations}+</h2>
                    <p>Transformations</p>
                </div>
            </section>

            {/* results */}

            <section
                className="results-section"
                data-aos="fade-up"
            >
                <div className="results-content">

                    <div
                        className="results-text"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        <h2>
                            TURN GOALS INTO <br />
                            RESULTS
                        </h2>

                        <p>
                            While these striking before and after body transformation photos may
                            have caught your eye initially, they represent just the beginning of
                            what we offer. Body transformation results from our clients take many
                            forms since their personal training is tailored to their unique goals
                            and circumstances.
                        </p>

                        <p>
                            Some of our clients aim for six-pack abs, however for the vast
                            majority, their journey is about restoring health, confidence, and
                            vitality, and getting into remarkable physical shape is an additional
                            benefit.
                            <span className="highlight">
                                Book a free consultation
                            </span>
                            to discover how our top-rated personal trainers can help you achieve
                            your fitness goals.
                        </p>
                    </div>

                    <div
                        className="results-image"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                    >
                        <img src={gymImage} alt="Gym Training" />
                    </div>

                </div>
            </section>

            {/* Our Program */}

            <section className="program-section" data-aos="fade-up">
                <h3 className='program-title' data-aos="fade-down">OUR <span>PROGRAMS</span></h3>
                <div className='services'>
                    <div className="service-card" data-aos="zoom-in-up" data-aos-delay="100">
                        <Link to="/strength-training">
                            <img src={stregnth} alt="Strength Training" />
                            <div className="icon">🏋️</div>
                            <h3>STRENGTH TRAINING</h3>
                            <p>Build muscle and improve overall body strength...</p>

                            <button>KNOW MORE</button>
                        </Link>
                    </div>

                    <div className="service-card" data-aos="zoom-in-up" data-aos-delay="200">
                        <Link to="/cardio-training">
                            <img src={crd} alt="Cardio Training" />
                            <div className="icon">❤️</div>
                            <h3>CARDIO TRAINING</h3>
                            <p>
                                Boost stamina and burn calories with effective cardio workouts.
                            </p>
                            <button>KNOW MORE</button>
                        </Link>
                    </div>

                    <div className="service-card" data-aos="zoom-in-up" data-aos-delay="300">
                        <Link to="/functional-fitness">
                            <img src={fnc} alt="Functional-Fitness" />
                            <div className="icon">🏃</div>
                            <h3>FUNCTIONAL FITNESS</h3>
                            <p>
                                Enhance mobility, balance, and flexibility with functional exercises.
                            </p>
                            <button>KNOW MORE</button>
                        </Link>
                    </div>

                    <div className="service-card" data-aos="zoom-in-up" data-aos-delay="400">
                        <Link to="/yoga-meditation">
                            <img src={yoga} alt="Yoga & Meditation" />
                            <div className="icon">🧘</div>
                            <h3>YOGA & MEDITATION</h3>
                            <p>
                                Improve flexibility, reduce stress, and achieve mental balance.
                            </p>
                            <button>KNOW MORE</button>
                        </Link>
                    </div>

                    <div className="service-card" data-aos="zoom-in-up" data-aos-delay="500">
                        <Link to="/diet-plan">
                            <img src={diet} alt="Diet Plan" />
                            <div className="icon">🥗</div>
                            <h3>DIET PLAN</h3>
                            <p>
                                Personalized nutrition plans to support your fitness journey.
                            </p>
                            <button className=''>KNOW MORE</button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* flexible membership plans */}

            <section className="membership-plans-section" data-aos="fade-up">
                <h2 className="section-title" data-aos="fade-down">
                    FLEXIBLE <span>MEMBERSHIP PLANS</span>
                </h2>

                <div className="membership-container">

                    {/* Left Side */}
                    <div className="membership-left" data-aos="fade-right">

                        <div className="membership-plans">

                            <div
                                className="membership-plan-card"
                                data-aos="zoom-in"
                                data-aos-delay="100"
                            >
                                <h3>MONTHLY PLAN</h3>
                                <h2>₹999 <span>/month</span></h2>

                                <ul>
                                    <li>Full Gym Access</li>
                                    <li>Basic Trainer Support</li>
                                    <li>Diet Guidance</li>
                                    <li>Locker Facility</li>
                                </ul>

                                <button onClick={() => navigate("/plans")}>
                                    CHOOSE PLAN
                                </button>
                            </div>

                            <div
                                className="membership-plan-card featured"
                                data-aos="zoom-in"
                                data-aos-delay="200"
                            >
                                <div className="badge">BEST VALUE</div>

                                <h3>QUARTERLY PLAN</h3>
                                <h2>₹2499 <span>/3 months</span></h2>

                                <ul>
                                    <li>Full Gym Access</li>
                                    <li>Personal Trainer (2 Sessions)</li>
                                    <li>Diet Guidance</li>
                                    <li>Locker Facility</li>
                                </ul>

                                <button onClick={() => navigate("/plans")}>
                                    CHOOSE PLAN
                                </button>
                            </div>

                            <div
                                className="membership-plan-card"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                            >
                                <h3>ANNUAL PLAN</h3>
                                <h2>₹8999 <span>/year</span></h2>

                                <ul>
                                    <li>Full Gym Access</li>
                                    <li>Personal Trainer (8 Sessions)</li>
                                    <li>Diet Guidance</li>
                                    <li>Locker Facility</li>
                                    <li>Free Body Assessment</li>
                                </ul>

                                <button onClick={() => navigate("/plans")}>
                                    CHOOSE PLAN
                                </button>
                            </div>

                        </div>

                        {/* Testimonials */}
                        <div
                            className="testimonials"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <h2>
                                WHAT OUR <span>MEMBERS SAY</span>
                            </h2>

                            <div className="testimonial-cards">

                                <div
                                    className="testimonial"
                                    data-aos="flip-up"
                                    data-aos-delay="100"
                                >
                                    <p>★★★★★</p>
                                    <blockquote>
                                        Best gym environment and supportive trainers!
                                    </blockquote>
                                    <span>– Raj Patel</span>
                                </div>

                                <div
                                    className="testimonial"
                                    data-aos="flip-up"
                                    data-aos-delay="200"
                                >
                                    <p>★★★★★</p>
                                    <blockquote>
                                        Modern equipment and excellent workout programs.
                                    </blockquote>
                                    <span>– Neha Shah</span>
                                </div>

                                <div
                                    className="testimonial"
                                    data-aos="flip-up"
                                    data-aos-delay="300"
                                >
                                    <p>★★★★★</p>
                                    <blockquote>
                                        Perfect place to stay motivated and fit.
                                    </blockquote>
                                    <span>– Amit Mehta</span>
                                </div>

                            </div>
                        </div>

                    </div>

                    {/* Right Side */}
                    <div className="images-section" data-aos="fade-left">

                        <div
                            className="fitness-banner"
                            data-aos="zoom-in"
                            data-aos-delay="100"
                        >
                            <img src={m1} alt="Fitness Banner" />
                        </div>

                        <div
                            className="members-image"
                            data-aos="zoom-in"
                            data-aos-delay="300"
                        >
                            <img src={m2} alt="Happy Members" />
                        </div>

                    </div>

                </div>
            </section>

            {/* Trainer section */}

            <section
                className="trainers-section"
                data-aos="fade-up"
            >
                <h2
                    data-aos="fade-down"
                    data-aos-duration="1000"
                >
                    OUR EXPERT TRAINERS
                </h2>

                <div className="trainer-cards">

                    <div
                        className="trainer-card"
                        data-aos="zoom-in-up"
                        data-aos-delay="100"
                    >
                        <img src={trainer1} alt="" />
                        <h3>sir</h3>
                        <p>Strength Coach</p>
                    </div>

                    <div
                        className="trainer-card"
                        data-aos="zoom-in-up"
                        data-aos-delay="200"
                    >
                        <img src={trainer2} alt="" />
                        <h3>Ma'am</h3>
                        <p>Yoga Trainer</p>
                    </div>

                    <div
                        className="trainer-card"
                        data-aos="zoom-in-up"
                        data-aos-delay="300"
                    >
                        <img src={trainer3} alt="Amit Kumar" />
                        <h3>Amit Kumar</h3>
                        <p>Cardio Expert</p>
                    </div>

                </div>
            </section>

            {/* Transformation Gallery */}

            <section
                className="transformation-section"
                data-aos="fade-up"
            >
                <h2
                    data-aos="fade-down"
                    data-aos-duration="1000"
                >
                    SUCCESS STORIES
                </h2>
                {selectedImage && (
                    <div
                        className="image-modal"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="close-btn"
                            onClick={() => setSelectedImage(null)}
                        >
                            ✕
                        </button>

                        <img
                            src={selectedImage}
                            alt="Preview"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                )}

                <div className="gallery">

                    <img
                        onClick={() => setSelectedImage(beforeAfter1)}
                        src={beforeAfter1}
                        alt="Client Transformation 1"
                        data-aos="zoom-in"
                        data-aos-delay="100"
                    />

                    <img
                        onClick={() => setSelectedImage(beforeAfter2)}
                        src={beforeAfter2}
                        alt="Client Transformation 2"
                        data-aos="zoom-in"
                        data-aos-delay="200"
                    />

                    <img
                        onClick={() => setSelectedImage(beforeAfter3)}
                        src={beforeAfter3}
                        alt="Client Transformation 3"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                    />

                    <img
                        onClick={() => setSelectedImage(beforeAfter4)}
                        src={beforeAfter4}
                        alt="Client Transformation 4"
                        data-aos="zoom-in"
                        data-aos-delay="400"
                    />

                </div>
            </section>
            {/* Timing section */}

            <section
                className="timing-section"
                data-aos="fade-up"
            >
                <h2
                    data-aos="fade-down"
                    data-aos-duration="1000"
                >
                    GYM HOURS
                </h2>

                <p
                    data-aos="fade-right"
                    data-aos-delay="100"
                >
                    Monday - Saturday : 5:00 AM - 11:00 PM
                </p>

                <p
                    data-aos="fade-left"
                    data-aos-delay="200"
                >
                    Sunday : 6:00 AM - 9:00 PM
                </p>
            </section>

        </>
    );
}

export default Home;