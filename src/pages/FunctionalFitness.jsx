import video from '../assets/functional.mp4';
import fnc from '../assets/functional.jpg'

function FunctionalFitness() {
    return (


        <div className="detail-page">
            <div className="detail-card">

                <img
                    src={fnc}
                    alt="Functional Fitness"
                    className="detail-image"
                />

                <h1>Functional Fitness</h1>

                <p>
                    Functional Fitness focuses on exercises that improve
                    your ability to perform everyday activities with ease.
                    These workouts enhance balance, flexibility, mobility,
                    coordination, and overall body strength.
                </p>

                <div className="content-row">

                    {/* LEFT: Benefits */}
                    <div className="box">
                        <h3>Benefits</h3>
                        <ul>
                            <li>Improves balance and coordination</li>
                            <li>Enhances flexibility and mobility</li>
                            <li>Reduces risk of injuries</li>
                            <li>Builds full-body strength</li>
                            <li>Boosts overall fitness performance</li>
                        </ul>
                    </div>

                    {/* RIGHT: Video */}
                    <div className="box video-box">
                        <h3>Watch Video</h3>

                        <video className="fitness-video" controls autoPlay playsInline muted loop>
                            <source src={video} type="video/mp4" />
                        </video>
                    </div>

                </div>


                <h3>Popular Exercises</h3>
                <ul>
                    <li>Squats</li>
                    <li>Lunges</li>
                    <li>Kettlebell Swings</li>
                    <li>Medicine Ball Slams</li>
                    <li>Burpees</li>
                </ul>

            </div>
        </div>

    );
}

export default FunctionalFitness;