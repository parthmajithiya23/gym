import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Home from "./home";
import About from "./about";
import Gallery from "./gallery";
import Products from "./products";
import Services from "./services";
import Contact from "./contact";
import Plans from "./plans";
import Admin from "./admin";
import ProductDetails from "./ProductDetails";
import Gymitem from "./gymitem"; 

import Navbar from "./navbar";
import Footer from "./footer";
import ScrollToTop from "./ScrollToTop";

import StrengthTraining from "./pages/StrengthTraining";
import CardioTraining from "./pages/CardioTraining";
import FunctionalFitness from "./pages/FunctionalFitness";
import YogaMeditation from "./pages/YogaMeditation";
import DietPlan from "./pages/DietPlan";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function AppContent() {
    const location = useLocation();

    const isAdmin = location.pathname === "/admin";

    return (
        <>
            {!isAdmin && <Navbar />}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/gallery" element={<Gallery />} />
               <Route path="/products" element={<Products />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/plans" element={<Plans />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/view-item/:id" element={<Gymitem />} />

                <Route
                    path="/strength-training"
                    element={<StrengthTraining />}
                />

                <Route
                    path="/cardio-training"
                    element={<CardioTraining />}
                />

                <Route
                    path="/functional-fitness"
                    element={<FunctionalFitness />}
                />

                <Route
                    path="/yoga-meditation"
                    element={<YogaMeditation />}
                />

                <Route
                    path="/diet-plan"
                    element={<DietPlan />}
                />

                <Route
                    path="/admin"
                    element={<Admin />}
                />
            </Routes>

            {!isAdmin && <Footer />}
        </>
    );
}

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
            <AppContent />
        </BrowserRouter>
    );
}

export default App;