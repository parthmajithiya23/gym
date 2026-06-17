import { Link } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">

      {/* LOGO */}
      <div className="logo">
        <img src={logo} alt="Gym" />

        <div className="logo-text">
          <span className="brand-name">SANATAN GYM</span>
          <p className="tagline">FITNESS CLUB</p>
        </div>
      </div>

      {/* MENU */}
      <ul className={menuOpen ? "links active" : "links"}>

        <li><Link className="link" to="/">Home</Link></li>
        <li><Link className="link" to="/about">About</Link></li>
        <li><Link className="link" to="/gallery">Gallery</Link></li>
        <li><Link className="link" to="/accessories">Accessories</Link></li>
        <li><Link className="link" to="/services">Services</Link></li>
        <li><Link className="link" to="/contact">Contact</Link></li>

        {/* 🔥 MOBILE ONLY BUTTON (inside menu) */}
        <li className="mobile-join">
          <button className="menu-join">JOIN NOW</button>
        </li>

      </ul>

      {/* 🔥 DESKTOP BUTTON ONLY */}
      <button className="nav-btn">
        JOIN NOW
      </button>

      {/* HAMBURGER */}
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