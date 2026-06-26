import { Link } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // Menu bandh karva mate ek simple function
  const closeMenu = () => setMenuOpen(false);

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

        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "link active" : "link"
            }
            to="/"
            onClick={closeMenu} /* 🔥 Ahia add karyu */
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink className={({ isActive }) => isActive ? "link active" : "link"} to="/about" onClick={closeMenu}>
            About
          </NavLink>
        </li>

        <li>
          <NavLink className={({ isActive }) => isActive ? "link active" : "link"} to="/gallery" onClick={closeMenu}>
            Gallery
          </NavLink>
        </li>

        <li><NavLink className={({ isActive }) => isActive ? "link active" : "link"} to="/products" onClick={closeMenu}>Products</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "link active" : "link"} to="/services" onClick={closeMenu}>Services</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "link active" : "link"} to="/plans" onClick={closeMenu}>Plans</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "link active" : "link"} to="/contact" onClick={closeMenu}>Contact</NavLink></li>

        {/* 🔥 MOBILE ONLY BUTTON (inside menu) */}
        <li className="mobile-join">
          <button 
            className="menu-join" 
            onClick={() => { 
              navigate("/plans"); 
              closeMenu(); /* 🔥 Redirect thaya pachi menu close thashe */
            }}
          >
            JOIN NOW
          </button>
        </li>

      </ul>

      {/* 🔥 DESKTOP BUTTON ONLY */}
      <button
        className="nav-btn"
        onClick={() => navigate("/plans")}
      >
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