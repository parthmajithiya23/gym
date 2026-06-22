import "./accessories.css";
import { Link } from "react-router-dom";
import gloves from "./assets/gloves.jpeg";
import shaker from "./assets/shaker.jpeg";
import band from "./assets/band.jpeg";
import belt from "./assets/belt.jpeg";
import mat from "./assets/mat.jpg";
import roller from "./assets/rollar.jpeg";
import rope from './assets/jump.jpeg';
import bag from './assets/bag.jpeg';
import bottle from "./assets/bottle.jpeg";
import wraps from "./assets/wraps.jpeg";
import abroller from "./assets/abroller.jpeg";
import medball from './assets/medball.jpg';
import battlerope from './assets/battlerope.jpeg';
import towel from './assets/towel.jpg';
import pullup from './assets/pullup.jpg';
import straps from './assets/straps.webp'


function Accessories() {
    const accessories = [
        { id: 1, name: "Gym Gloves", image: gloves },
        { id: 2, name: "Shaker Bottle", image: shaker },
        { id: 3, name: "Resistance Band", image: band },
        { id: 4, name: "Weight Belt", image: belt },
        { id: 5, name: "Yoga Mat", image: mat },
        { id: 6, name: "Foam Roller", image: roller },
        
        { id: 7, name: "Jump Rope", image: rope },
        { id: 8, name: "Gym Bag", image: bag },
        { id: 9, name: "Water Bottle", image: bottle },
        { id: 10, name: "Wrist Wraps", image: wraps },
        { id: 11, name: "Ab Roller", image: abroller },
        { id: 12, name: "Medicine Ball", image: medball },
        { id: 13, name: "Battle Rope", image: battlerope },
        { id: 14, name: "Towel", image: towel },
        { id: 15, name: "Pull-up Bands", image: pullup },
        { id: 16, name: "Lifting Straps", image: straps },
    ];

    return (
        <>
            <section className="accessories-section" data-aos="fade-up">
                <h2>GYM ACCESSORIES</h2>

                <div className="accessories-container">
                    {accessories.map((item) => (
                        <div className="accessory-card" data-aos="zoom-in" key={item.id}>
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* Facalitites section */}

            <section className="facilities-section"  data-aos="fade-up">
                <h2>OUR FACILITIES</h2>

                <ul>
                    <li>❄️ Air Conditioned Gym</li>
                    <li>📶 Free WiFi</li>
                    <li>🔒 Locker Facility</li>
                    <li>💧 Drinking Water</li>
                    <li>💪 Personal Training</li>
                    <li>🅿️ Parking Area</li>
                </ul>
            </section>
        </>
    );
}

export default Accessories;