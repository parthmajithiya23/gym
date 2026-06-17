import cardio from '../assets/crd.jpg';

function CardioTraining() {
    return (
        <section className="detail-page">
            <h1>Cardio Training</h1>

            <img
                src={cardio}
                alt="Cardio Training"
                className="detail-image"
            />

            <p>
                Cardio Training focuses on improving heart health,
                increasing stamina, burning calories, and enhancing
                overall fitness. Our cardio programs include treadmill
                workouts, cycling, rowing, HIIT sessions, and other
                exercises designed to keep your body active and healthy.
            </p>

            <h2>Benefits</h2>
            <ul>
                <li>Improves Heart & Lung Health</li>
                <li>Burns Calories & Supports Weight Loss</li>
                <li>Increases Stamina & Endurance</li>
                <li>Boosts Energy Levels</li>
                <li>Reduces Stress & Improves Mood</li>
                <li>Enhances Overall Fitness</li>
            </ul>
        </section>
    );
}

export default CardioTraining;