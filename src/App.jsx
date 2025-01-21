import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar.jsx";
import Player from "./pages/Player.jsx";

const App = () => {
    return (
        <Router>
            <div className="root">
                <Navbar></Navbar>
                <div style={{display: 'flex', flex: 1}}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/player" element={<Player />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
                {/* Footer */}
            </div>
        </Router>
    );
};

export default App;