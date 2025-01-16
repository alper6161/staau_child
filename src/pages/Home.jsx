import React, {useEffect} from "react";
import Carousel from "../components/Carousel.jsx";
import {useStore} from "../state_management/zustand";

const Home = () => {
    const { user, setUser } = useStore((state) => state);

    useEffect(() => {
        setUser({ name: "Suat, This is a test for redux Zustand" });
    }, []);

    return <div className="page">
        <h1>Home Page</h1>
        <div> {user?.name}</div>
        <div>
            <Carousel></Carousel>
        </div>

    </div>;
};

export default Home;
