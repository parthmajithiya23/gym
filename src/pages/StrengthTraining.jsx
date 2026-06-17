import strenth from '../assets/strenth.jpeg';
function StrengthTraining() {
    return (

        
        <section className="detail-page">
            <h1>Strength Training</h1>
            <img
                src={strenth}
                alt="Strength Training"
                className="detail-image"
            />
            <p>
                Strength Training is designed to increase muscle mass,
                improve endurance, enhance posture, and boost overall
                physical performance. Our expert trainers create
                personalized workout plans to help you achieve your
                fitness goals safely and effectively.
            </p>

            <h2>Benefits</h2>
            <ul>
                <li>Muscle Growth & Strength Development</li>
                <li>Fat Loss & Improved Metabolism</li>
                <li>Better Posture & Joint Stability</li>
                <li>Enhanced Athletic Performance</li>
                <li>Increased Bone Density</li>
                <li>Greater Confidence & Mental Toughness</li>
            </ul>
        </section>
    );
}

export default StrengthTraining;