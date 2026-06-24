import "./gallery.css";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import g1 from "./assets/gallery/g1.jpeg";
import g2 from "./assets/gallery/g2.jpeg";
import g3 from "./assets/gallery/g3.jpeg";
import g4 from "./assets/gallery/g4.jpeg";
import g5 from "./assets/gallery/g5.jpeg";
import g6 from "./assets/gallery/g6.jpeg";
import g7 from './assets/gallery/g7.webp';
import g8 from './assets/gallery/g8.webp';
import g9 from './assets/gallery/g9.webp';
import g10 from './assets/gallery/g10.webp';
import g11 from './assets/gallery/g11.webp';
import g12 from './assets/gallery/g12.webp';
import g13 from './assets/gallery/g13.webp';
import g14 from './assets/gallery/g14.webp';
import g15 from './assets/gallery/g15.webp';
import g16 from './assets/gallery/g16.webp';
import g17 from './assets/gallery/g17.webp';
import g18 from './assets/gallery/g18.webp';
import g19 from './assets/gallery/g19.webp';
import g20 from './assets/gallery/g20.webp';
import g21 from './assets/gallery/g21.webp';
import g22 from './assets/gallery/g22.webp';
import g23 from './assets/gallery/g23.webp';
import g24 from './assets/gallery/g24.webp';
import g25 from './assets/gallery/g25.webp';
import g26 from './assets/gallery/g26.webp';
import g27 from './assets/gallery/g27.webp';
import g28 from './assets/gallery/g28.webp';
import g29 from './assets/gallery/g29.webp';
import g30 from './assets/gallery/g30.webp';



function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    const images = [
      g1,g2,g3,g4,g5,g6,g7,g8,g9,g10,
      g11,g12,g13,g14,g15,g16,g17,g18,g19,g20,
      g21,g22,g23,g24,g25,g26,g27,g28,g29,g30      
    ];

    return (
        <section className="gallery-section">
            <h2>OUR GALLERY</h2>

            <div className="gallery-grid">
                {images.map((img, index) => (
                    <div
                        className="gallery-card"
                        key={index}
                        data-aos="zoom-in"
                        data-aos-delay={index * 20}
                    >
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