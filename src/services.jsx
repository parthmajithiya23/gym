import React from "react";
import "./services.css";
import gymImage from "./assets/gym.jpg";
import trainer3 from "./assets/trainer3.webp";
import fatloss from "./assets/fatloss.jpeg";
import kasar from "./assets/kasar.jpg"

function Sections() {
  const data = [
    {
      title: "TURN GOALS INTO RESULTS",
      desc1:
        "Transform your body with expert guidance, modern equipment and personalized workout plans designed for real results.",
      desc2:
        "Book a free consultation and start your fitness journey today.",
      img: gymImage,
    },
    {
      title: "EXPERT PERSONAL TRAINING",
      desc1:
        "Our certified trainers help you achieve fat loss, muscle gain and strength with scientific training methods.",
      desc2:
        "Every workout is customized based on your body and goal.",
      img: trainer3,
    },
    {
      title: "FAT LOSS PROGRAM",
      desc1:
        "Burn fat fast with HIIT, cardio and structured training plans.",
      desc2:
        "We help you stay consistent and achieve visible results.",
      img: fatloss,
    },
    {
      title: "YOGA & FLEXIBILITY",
      desc1:
        "Improve flexibility, posture and mental peace with yoga sessions.",
      desc2:
        "Perfect balance between mind and body fitness.",
      img: kasar,
    },
  ];

  return (
    <div className="main-sections">

      {data.map((item, index) => (
        <section
          key={index}
          className={`section ${index % 2 === 0 ? "" : "reverse"}`}
        >
          <div className="text">
            <h2>{item.title}</h2>
            <p>{item.desc1}</p>
            <p>{item.desc2}</p>
          </div>

          <div className="image">
            <img src={item.img} alt={item.title} />
          </div>
        </section>
      ))}

    </div>
  );
}

export default Sections;