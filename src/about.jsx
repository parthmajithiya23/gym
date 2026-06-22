import "./about.css";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function About() {
    // Refs for both sections
    const statsRef = useRef(null);
    const achievementsRef = useRef(null);

    // States to trigger the counters
    const [startStatsCount, setStartStatsCount] = useState(false);
    const [startAchievementsCount, setStartAchievementsCount] = useState(false);

    // Stats Section States
    const [members, setMembers] = useState(0);
    const [trainers, setTrainers] = useState(0);
    const [statsExperience, setStatsExperience] = useState(0);

    // Achievements Section States
    const [transformations, setTransformations] = useState(0);
    const [challenges, setChallenges] = useState(0);
    const [achExperience, setAchExperience] = useState(0);
    const [satisfaction, setSatisfaction] = useState(0);

    // Observer for Stats Section
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartStatsCount(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Observer for Achievements Section
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartAchievementsCount(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (achievementsRef.current) {
            observer.observe(achievementsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Counter Logic for Stats Section
    useEffect(() => {
        if (!startStatsCount) return;

        const interval = setInterval(() => {
            setMembers((prev) => (prev < 500 ? prev + 5 : 500));
            setTrainers((prev) => (prev < 3 ? prev + 1 : 3));
            setStatsExperience((prev) => (prev < 10 ? prev + 1 : 10));
        }, 30);

        return () => clearInterval(interval);
    }, [startStatsCount]);

    // Counter Logic for Achievements Section
    useEffect(() => {
        if (!startAchievementsCount) return;

        const interval = setInterval(() => {
            setTransformations((prev) => (prev < 1000 ? prev + 10 : 1000));
            setChallenges((prev) => (prev < 50 ? prev + 1 : 50));
            setAchExperience((prev) => (prev < 10 ? prev + 1 : 10));
            setSatisfaction((prev) => (prev < 98 ? prev + 2 : 98));
        }, 30);

        return () => clearInterval(interval);
    }, [startAchievementsCount]);

    return (
        <>
            <section className="about-page">
                <div
                    className="about-hero"
                    data-aos="fade-in"
                    data-aos-duration="1500"
                >
                    <h1>ABOUT US</h1>
                    <p>Transform Your Body, Transform Your Life</p>
                </div>

                <div className="about-content">
                    <div
                        className="about-text"
                        data-aos="fade-right"
                        data-aos-duration="1200"
                    >
                        <h2>Who We Are</h2>
                        <p>
                            Welcome to Sanatan Gym, where fitness meets discipline and strength meets tradition.
                            Our mission is to help individuals achieve their health
                            and fitness goals through expert guidance, modern
                            equipment, and a motivating environment rooted in dedication.
                        </p>

                        <p>
                            Whether you are a beginner or an experienced athlete,
                            our certified trainers and customized workout programs
                            are designed to help you build strength, improve endurance,
                            and become the strongest version of yourself.
                        </p>
                    </div>

                    <div
                        className="about-image"
                        data-aos="fade-left"
                        data-aos-duration="1500"
                    >
                        <img
                            src="/about.jpeg"
                            alt="Gym"
                        />
                    </div>
                </div>

                <div
                    className="mission-section"
                    data-aos="zoom-in"
                    data-aos-duration="1200"
                >
                    <h2>OUR MISSION</h2>
                    <p>
                        To inspire and empower people to live healthier,
                        stronger, and more confident lives through fitness.
                    </p>
                </div>

                {/* --- STATS SECTION (Uses statsRef) --- */}
                <div className="stats-section" ref={statsRef}>
                    <div
                        className="stat-card"
                        data-aos="flip-left"
                        data-aos-delay="100"
                    >
                        <h3>{members}+</h3>
                        <p>Active Members</p>
                    </div>

                    <div
                        className="stat-card"
                        data-aos="flip-left"
                        data-aos-delay="200"
                    >
                        <h3>{trainers}</h3>
                        <p>Certified Trainers</p>
                    </div>

                    <div
                        className="stat-card"
                        data-aos="flip-left"
                        data-aos-delay="300"
                    >
                        <h3>{statsExperience}+</h3>
                        <p>Years Experience</p>
                    </div>

                    <div
                        className="stat-card"
                        data-aos="flip-left"
                        data-aos-delay="400"
                    >
                        <h3>24/7</h3>
                        <p>Support</p>
                    </div>
                </div>
            </section>

            {/* OUR STORY */}
            <section
                className="story-section"
                data-aos="fade-up"
                data-aos-duration="1200"
            >
                <h2>OUR STORY</h2>

                <p>
                    Founded with a passion for fitness, discipline, and inner strength, Sanatan Gym
                    started with a simple goal: helping people build healthier and more powerful lifestyles
                    rooted in consistency and dedication. Over the years, we have transformed hundreds of
                    lives through expert coaching, personalized training plans, and a strong supportive community.
                </p>

                <p>
                    Today, Sanatan Gym is more than just a fitness center.
                    It is a place where individuals push their limits,
                    build physical and mental strength, and grow into the best version of themselves.
                </p>
            </section>

            {/* WHY CHOOSE US */}
            <section className="why-section">
                <h2
                    data-aos="fade-down"
                    data-aos-duration="1000"
                >
                    WHY CHOOSE US?
                </h2>
                <div className="why-cards">
                    <div
                        className="why-card"
                        data-aos="zoom-in-up"
                        data-aos-delay="100"
                    >
                        <h3>Modern Equipment</h3>
                        <p>
                            Train with world-class fitness equipment
                            designed for maximum performance.
                        </p>
                    </div>
                    <div
                        className="why-card"
                        data-aos="zoom-in-up"
                        data-aos-delay="200"
                    >
                        <h3>Certified Trainers</h3>
                        <p>
                            Get expert guidance from experienced
                            and certified fitness professionals.
                        </p>
                    </div>
                    <div
                        className="why-card"
                        data-aos="zoom-in-up"
                        data-aos-delay="300"
                    >
                        <h3>Personal Programs</h3>
                        <p>
                            Customized workout and nutrition plans
                            based on your goals.
                        </p>
                    </div>
                    <div
                        className="why-card"
                        data-aos="zoom-in-up"
                        data-aos-delay="400"
                    >
                        <h3>Supportive Community</h3>
                        <p>
                            Join a positive environment that keeps
                            you motivated every day.
                        </p>
                    </div>
                </div>
            </section>

            {/* OUR VALUES */}
            <section className="values-section">
                <h2
                    data-aos="fade-down"
                    data-aos-duration="1000"
                >
                    OUR VALUES
                </h2>
                <div className="values-grid">
                    <div data-aos="fade-right">
                        <h3>Discipline</h3>
                        <p>Consistency is the key to lasting results.</p>
                    </div>
                    <div data-aos="fade-left">
                        <h3>Dedication</h3>
                        <p>We stay committed to every member's journey.</p>
                    </div>
                    <div data-aos="fade-right">
                        <h3>Growth</h3>
                        <p>Continuous improvement in fitness and life.</p>
                    </div>
                    <div data-aos="fade-left">
                        <h3>Community</h3>
                        <p>Building stronger people together.</p>
                    </div>
                </div>
            </section>

            {/* --- ACHIEVEMENTS SECTION (Uses achievementsRef) --- */}
            <section className="achievement-section" ref={achievementsRef}>
                <h2
                    data-aos="fade-down"
                    data-aos-duration="1000"
                >
                    OUR ACHIEVEMENTS
                </h2>
                <div className="achievement-cards">
                    <div data-aos="zoom-in" data-aos-delay="100">
                        <h3>{transformations}+</h3>
                        <p>Successful Transformations</p>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="200">
                        <h3>{challenges}+</h3>
                        <p>Fitness Challenges Conducted</p>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="300">
                        <h3>{achExperience}+</h3>
                        <p>Years Of Excellence</p>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="400">
                        <h3>{satisfaction}%</h3>
                        <p>Member Satisfaction</p>
                    </div>
                </div>
            </section>

            {/* MOTIVATIONAL QUOTE */}
            <section
                className="quote-section"
                data-aos="fade-up"
                data-aos-duration="1500"
            >
                <h2>
                    "The only bad workout is the one that didn't happen."
                </h2>
                <p>
                    Every step you take today brings you closer
                    to the strongest version of yourself.
                </p>
            </section>
        </>
    );
}

export default About;