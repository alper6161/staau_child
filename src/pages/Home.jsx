import React, {useEffect} from "react";
import Carousel from "../components/Carousel.jsx";
import {useStore} from "../state_management/zustand";
import MiniCarousel from "../components/MiniCarousel.jsx";

const Home = () => {
    const { user, setUser } = useStore((state) => state);

    useEffect(() => {
        setUser({ name: "Suat, This is a test for redux Zustand" });
    }, []);

    return <div className="page home">
        <div style={{marginBottom: '1rem'}}>
            <Carousel></Carousel>
        </div>
        <div className="mini-carousel">
            <MiniCarousel id="mini-carousel-1"></MiniCarousel>
        </div>
        <div className="mini-carousel">
            <MiniCarousel id="mini-carousel-2"></MiniCarousel>
        </div>
        <div className="mini-carousel">
            <MiniCarousel id="mini-carousel-3"></MiniCarousel>
        </div>
        <div className="mini-carousel">
            <MiniCarousel id="mini-carousel-4"></MiniCarousel>
        </div>
    </div>;
};

export default Home;
