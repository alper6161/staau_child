import React, {useEffect, useState} from "react";
import Carousel from "../components/Carousel.jsx";
import {useStore} from "../state_management/zustand";
import MiniCarousel from "../components/MiniCarousel.jsx";
import {fetchFilesInFolder} from "../utils/google-util.js";
import {IMAGE_FILE_ID} from "../utils/constants.js";

const Home = () => {
    const {user, setUser} = useStore((state) => state);
    const [bookList, setBookList] = useState([]);

    useEffect(() => {
        setUser({name: "Suat, This is a test for redux Zustand"});
        fetchFilesInFolder(IMAGE_FILE_ID).then(list => setBookList(list));
    }, []);

    useEffect(() => {
        if (bookList && bookList.length) {
            console.log(bookList);
        }
    }, [bookList]);

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
