import React, {useEffect} from "react";
import Carousel from "../components/Carousel.jsx";
import {useStore} from "../state_management/zustand";

const Home = () => {
    const { user, setUser } = useStore((state) => state);

    useEffect(() => {
        setUser({ name: "Suat, This is a test for redux Zustand" });
    }, []);

    return <div className="page home">
        <div style={{flex: 2}}>
            <Carousel></Carousel>
        </div>
        <div className="mini-carousel">

        </div>
        <div className="mini-carousel">

        </div>
        <div className="mini-carousel">

        </div>
    </div>;
};

export default Home;
