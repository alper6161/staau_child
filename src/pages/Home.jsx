import React, {useEffect, useState} from "react";
import Carousel from "../components/Carousel.jsx";
import {useStore} from "../state_management/zustand";
import MiniCarousel from "../components/MiniCarousel.jsx";
import {fetchFilesInFolder, fetchImagesFromDrive} from "../utils/google-util.js";
import {IMAGE_FILE_ID} from "../utils/constants.js";

const Home = () => {
    const {user, setUser} = useStore((state) => state);
    const [bookList, setBookList] = useState([]);
    const [miniCarousel1, setMiniCarousel1] = useState([]);

    useEffect(() => {
        setUser({name: "Suat, This is a test for redux Zustand"});
        fetchFilesInFolder(IMAGE_FILE_ID).then(list => setBookList(list));
    }, []);


    useEffect(() => {
        if (bookList && bookList.length) {
            console.log(bookList);
            prepareMiniCarousel(bookList);
        }
    }, [bookList]);

    const prepareMiniCarousel = (bookList) => {
        const desiredBookList = bookList.slice(0, 10);
        fetchImagesFromDrive(desiredBookList).then((finalBookData) => {
            console.log('finall', finalBookData);
            setMiniCarousel1(finalBookData);
        });
        setMiniCarousel1(bookList.slice(0, 10));
    }

    return <div className="page home">
        <div style={{marginBottom: '1rem'}}>
            <Carousel></Carousel>
        </div>
        <div className="mini-carousel">
            <MiniCarousel content={miniCarousel1} title={'Size ÖZel'}></MiniCarousel>
        </div>
        <div className="mini-carousel">
            <MiniCarousel content={[]} title={'En özel Kitaplar'}></MiniCarousel>
        </div>
        <div className="mini-carousel">
            <MiniCarousel content={[]} title={'Çok Ynei'}></MiniCarousel>
        </div>
        <div className="mini-carousel">
            <MiniCarousel content={[]} title={'Geliştirmek İsteyenlere'}></MiniCarousel>
        </div>
    </div>;
};

export default Home;
