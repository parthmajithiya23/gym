import { Link } from "react-router-dom";
import { useState } from "react";
import './App.css';
import logo from './assets/logo.png';

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="nav">

            <div className="logo">
                <img src={logo} alt="Gym" />

                <div className="logo-text">
                    <span className="brand-name">SANATAN GYM</span>
                    <p className="tagline">FITNESS CLUB</p>
                </div>
            </div>

             {/* Menu */}
            <div className={menuOpen ? "links active" : "links"}>
                <a className="link" href="/">Home</a>
                <a className="link" href="/about">About</a>
                <a className="link" href="/gallery">Gallary</a>
                <a className="link" href="/accessories">Accessories</a>
                <a className="link" href="/">Services</a>
                <a className="link" href="/">Contact</a>
            </div>

            <button className="nav-btn">JOIN NOW</button>

            <div
                className="menu-btn"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </div>          

        </nav>
    );
}

export default Navbar;