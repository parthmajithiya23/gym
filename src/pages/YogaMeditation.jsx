import yoga from "../assets/yoga.jpg";
import bnf from "../assets/benifit.jpg"
import img2 from "../assets/popularpractice.webp";

function YogaMeditation() {
    return (
        <div className="detail-page">

            <h1>Yoga & Meditation</h1>

            <img
                src={yoga}
                alt="Yoga and Meditation"
                className="detail-image"
            />

            <p>
                Yoga and Meditation help improve physical strength,
                flexibility, mental focus, and inner peace. Regular
                practice reduces stress, enhances mindfulness, and
                promotes a healthy lifestyle.
            </p>

            <div className="bnf">
                <div className="bnf normal">
                    <img src={bnf} alt="benefits" className="bnf-image" />
                    <div className="bnf-text">
                        <h2>Benefits</h2>
                        <ul>
                            <li>Improves flexibility and posture</li>
                            <li>Reduces stress and anxiety</li>
                            <li>Enhances concentration and focus</li>
                            <li>Boosts overall mental well-being</li>
                            <li>Supports better sleep quality</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bnf">
                <div className="bnf reverse">
                    <img src={img2} alt="popular practices" className="bnf-image" />

                    <div className="bnf-text">
                        <h2>Popular Practices</h2>
                        <ul>
                            <li>Surya Namaskar</li>
                            <li>Pranayama Breathing</li>
                            <li>Vrikshasana (Tree Pose)</li>
                            <li>Bhujangasana (Cobra Pose)</li>
                            <li>Mindfulness Meditation</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default YogaMeditation;