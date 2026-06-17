import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import StrengthTraining from "./pages/StrengthTraining";
import Home from './home';
import Navbar from "./navbar";
import Footer from './footer';
import CardioTraining from "./pages/CardioTraining";
import FunctionalFitness from "./pages/FunctionalFitness";
import YogaMeditation from "./pages/YogaMeditation";
import DietPlan from "./pages/DietPlan";
import ScrollToTop from "./ScrollToTop";
import About from './about';
import Gallery from './gallery'
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";
import Accessories from './accessories';

function App() {

   useEffect(() => {
    AOS.init({
      duration: 700,
      once: false,
      mirror: true,
       offset: 80,
    });
  }, []);

    return (

        <BrowserRouter>
            <ScrollToTop />
            <Navbar />

            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/accessories" element={<Accessories />} />
                <Route path="/strength-training" element={<StrengthTraining />} />
                <Route path="/cardio-training" element={<CardioTraining />} />
                <Route path="/functional-fitness" element={<FunctionalFitness />} />
                <Route path="/yoga-meditation" element={<YogaMeditation />} />
                <Route path="/diet-plan" element={<DietPlan />} />

            </Routes>

            <Footer />
        </BrowserRouter>

    );
}

export default App;