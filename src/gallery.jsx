import "./gallery.css";
import { useState } from "react";

function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    const images = [
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e",
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
        "https://images.unsplash.com/photo-1518611012118-696072aa579a",
        "https://images.unsplash.com/photo-1599058917212-d750089bc07e",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Battle-Ropes.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Bodyweight.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Bosu-Ball-Male-and-Female-1.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Free-Weights-2-Males.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Butterfly-Stretch.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Dumbbell-Female.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Chalk-1.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Jump-Rope.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Mirror-Dumbbell-Pick-Up.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Sit-Up-2-Female.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Tricep-Extension-Female.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Stretching-2-Female.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Workout-Moment-Gym-Floor-Hero.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Workout-Moment-Gym-Floor-Workouts2.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Workout-Moments-Cell-Phone-Female.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Workout-Moments-Elliptical.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Workout-Moments-Team-Training.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/GGX-Body-Pump-2.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/GGX-Group-2.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/GGX-Pilates.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/GGX-Post-Class.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/GGX-Studio-2.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/GGX-Yoga-Class-1.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Group-Training-Team-Training.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Indoor-Large-Group-Training-High-Five.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Indoor-Large-Group-Training-Male-Sit-Ups.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Outdoor-Large-Group-Training-High-Five.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Outdoor-Large-Group-Training-Female-Sit-Ups.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Outdoor-Large-Group-Training-Push-Up-Plank.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Smoothie-Bar-Wide.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Kids-Club-GGX-Studio.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/PT-Member-Medball-Pass.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/PT-Male-Client-Check-In.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Golds_Day_2_Funct-04011_final.jpg?fit=1125%2C741&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Golds_Day_2_Funct-03791_final.jpg?fit=1125%2C741&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Golds_Day_1_Funct-01497_final.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Golds_Day_1_Golds_Fit-02332_final_tiff.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Golds_Day_1_Funct-01602_final.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Golds_Day_2_Brick-04855_final.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Golds_Day_1_Golds_Fit-02110_final.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Golds_Day_1_Funct-01003_final.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Golds_Day01_greenwall_misc-236-copy.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Golds_Day01_Benchpress-329.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Golds_Day_3_Funct-07298_final.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Golds_Day_3_Stairs-06702.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Golds_Day_3_Free_Weight-06153__no_Gym80_final.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Golds_Day_3_Funct-07136_final.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Golds_Day_3_Free_Weight-05802_final-1.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Golds-Reloaded_0845_v01-copy.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/GoldsGym_BBG_081222_Day4_Still_WoodWall_BodyWeight_RussianTwist_0154.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/GoldsGym_BBG_081222_Day4_Still_WoodWall_BodyWeight_RussianTwist_0138_eRGB.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/GoldsGym_BBG_081222_Day4_Still_WoodWall_BodyWeight_Pushups_0254_eRGB.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/GoldsGym_BBG_081222_Day4_Still_RedBrick_Functional_DumbbellRow_0155.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/GoldsGym_BBG_081222_Day4_Still_RedBrick_FreeWeight_PreacherCurl_0084-3.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/GoldsGym_BBG_081222_Day4_Still_Rack_Functional_OverheadSquats_0042_Preview.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/GoldsGym_BBG_081222_Day4_Still_Classroom_Functional_KettleBell_0075_eRGB.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/GoldsGym_BBG_081222_Day4_Still_Classroom_Functional_BattleRope_0020_Preview.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/GoldsGym_BBG_081122_Day3_Still_Machine_Butterfly_CableCross_0005_eRGB.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/GoldsGym_BBG_081122_Day3_Still_Machine_HighRowDual_0141_preview.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/GoldsGym_BBG_081022_Day2_Still_Concrete_PrePost_UltimateStretch_0062_Preview.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/GoldsGym_BBG_081022_Day2_Still_Classroom_PrePost_KettleBell_0029_eRGB.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/GoldsGym_BBG_081022_Day2_Still_Classroom_PrePost_Extras_0196_sRGB.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/GoldsGym_BBG_081022_Day2_Still_Cardio_Treadmill_0241_Preview.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/GoldsGym_BBG_081022_Day2_Still_Cardio_Treadmill_0156_Preview.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/GoldsGym_BBG_080922_Day1_Still_GreenWall_Friends_Extra_0029_eRGB.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Golds_Day03_lockerroom_3699.jpg?fit=2281%2C1521&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Golds_Day03_abs_4512.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Golds_Day03_abs_4503.jpg?fit=1125%2C750&ssl=1",
        "https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/Golds_Day02_Squatrack1152_v01.jpg?fit=1125%2C750&ssl=1",

    ];

    return (
        <section className="gallery-section">
            <h2>OUR GALLERY</h2>

            <div className="gallery-grid">
                {images.map((img, index) => (
                    <div className="gallery-card" key={index}>
                        <img
                            src={img}
                            alt="Gym Gallery"
                            onClick={() => setSelectedImage(img)}
                        />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div
                    className="modal"
                    onClick={() => setSelectedImage(null)}
                >
                    <span className="close-btn">
                        &times;
                    </span>

                    <img
                        src={selectedImage}
                        alt="Preview"
                        className="modal-image"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </section>
    );
}

export default Gallery;