import diet from "../assets/diet.avif";
import ntr from "../assets/nutrition.jpg";

function DietPlan() {
    return (
        <div className="detail-page">

            <h1>Diet & Nutrition Plan</h1>

            <img
                src={diet}
                alt="Diet Plan"
                className="detail-image"
            />

            <p>
                A proper diet plan is essential for achieving your fitness goals.
                Balanced nutrition provides the energy needed for workouts,
                supports muscle growth, and helps maintain overall health and wellness.
            </p>

            <div className="bnf">
                <div className="bnf normal">
                    <img src={ntr} alt="" className="bnf-image" />
                    <div className="bnf-text">
                        <h2>Benefits</h2>
                        <ul>
                            <li>Supports healthy weight management</li>
                            <li>Provides energy for daily activities</li>
                            <li>Promotes muscle growth and recovery</li>
                            <li>Improves overall health and immunity</li>
                            <li>Enhances workout performance</li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="bnf">
                <div className="bnf reverse">
                      <img src={ntr} alt="" className="bnf-image" />
                    <div className="bnf-text">
                        <h2>Nutrition Guidelines</h2>
                        <ul>
                            <li>Eat protein-rich foods regularly</li>
                            <li>Include fresh fruits and vegetables</li>
                            <li>Stay hydrated throughout the day</li>
                            <li>Choose whole grains over processed foods</li>
                            <li>Avoid excessive sugar and junk food</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default DietPlan;