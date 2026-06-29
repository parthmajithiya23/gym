import React, { useEffect } from "react";
import "./plans.css";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Required for AOS animations

function Plans() {
    const navigate = useNavigate();

    // Initialize AOS when the component mounts
    useEffect(() => {
        AOS.init({
            duration: 800, // Slightly faster duration for snappy card pop-ups
            once: false,
            offset: 100,
        });
    }, []);

    const plans = [
        {
            name: "Monthly Plan",
            duration: "1 Month",
            price: "₹999",
            features: [
                "Full Gym Access",
                "Basic Trainer Support",
                "Diet Guidance",
                "Locker Facility",
            ],
        },
        {
            name: "Standard Plan",
            duration: "3 Months",
            price: "₹2499",
            features: [
                "Unlimited Gym Access",
                "Locker Facility",
                "Diet Guidance",
                "Monthly Progress Check",
            ],
        },
        {
            name: "Premium Plan",
            duration: "6 Months",
            price: "₹4499",
            popular: true,
            features: [
                "Gym Access",
                "Diet Plan",
                "Trainer Support",
            ],
        },
        {
            name: "Annual Plan",
            duration: "12 Months",
            price: "₹8999",
            features: [
                "Full Gym Access",
                "Personal Trainer (8 Sessions)",
                "Diet Guidance",
                "Locker Facility",
                "Free Body Assessment",
            ],
        }
    ];

    return (
        <section className="plans-section" style={{ overflowX: "hidden" }}>
            {/* Animating the main heading dropping in from above */}
            <h1 data-aos="fade-down">MEMBERSHIP PLANS</h1>

            <div className="plans-container">
                {plans.map((plan, index) => (
                    <div 
                        className="plan-card" 
                        key={index}
                        data-aos="fade-up" // Cards slide up
                        data-aos-delay={index * 150} // Staggers each card by 150ms based on its index
                    >
                        {plan.popular && (
                            <span className="popular-badge">
                                🔥 Most Popular
                            </span>
                        )}

                        <h2>{plan.name}</h2>
                        <h3>{plan.price}</h3>
                        <p>{plan.duration}</p>

                        <ul>
                            {plan.features.map((item, i) => (
                                <li key={i}>✅ {item}</li>
                            ))}
                        </ul>

                        <button onClick={() => navigate("/contact", { state: { selectedPlan: plan.name } })}>
                            Join Now
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Plans;