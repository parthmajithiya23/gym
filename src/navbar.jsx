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

                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/about">About</Link>
                <Link className="link" to="/gallery">Gallery</Link>
                <Link className="link" to="/accessories">Accessories</Link>
                <Link className="link" to="/">Services</Link>
                <Link className="link" to="/">Contact</Link>

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