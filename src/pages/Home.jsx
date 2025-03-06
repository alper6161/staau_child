import React, {useEffect, useState} from "react";
import Carousel from "../components/Carousel.jsx";
import {useStore} from "../state_management/zustand";
import MiniCarousel from "../components/MiniCarousel.jsx";
import {fetchFilesInFolder, fetchImagesFromServer} from "../utils/google-util.js";
import {IMAGE_FILE_ID} from "../utils/constants.js";

const Home = () => {
    const {setUser} = useStore((state) => state);
    const [bookList, setBookList] = useState([]);
    const [miniCarousels, setMiniCarousels] = useState({});

    useEffect(() => {
        setUser({name: "Suat, This is a test for redux Zustand"});

        // Kitap listesini Google Drive'dan çek
        fetchFilesInFolder(IMAGE_FILE_ID).then((list) => {
            setBookList(list);
        });
    }, []);

    useEffect(() => {
        if (bookList.length > 0) {
            console.log("BOOKLIST", bookList);
            prepareMiniCarousels(bookList);
        }
    }, [bookList]);

    const prepareMiniCarousels = async (bookList) => {
        if (!bookList || bookList.length === 0) return;

        const carouselConfigs = {
            "Size Özel": bookList.slice(0, 5),
            "En Özel Kitaplar": bookList.slice(10, 15),
            "Çok Yeni": bookList.slice(20, 25),
            "Geliştirmek İsteyenlere": bookList.slice(30, 35),
        };

        try {
            let newCarousels = {};

            for (const [title, books] of Object.entries(carouselConfigs)) {
                const fileIds = books.map((book) => book.id);
                const images = await fetchImagesFromServer(fileIds);

                newCarousels[title] = books.map((book, index) => ({
                    img: images[index]?.imgUrl || "default-image.jpg",
                    title: book.title || "Unknown Title",
                    id: book.id || index + 1,
                }));
            }

            console.log("Final Carousels Data:", newCarousels);
            setMiniCarousels(newCarousels);
        } catch (error) {
            console.error("Error in prepareMiniCarousels:", error);
        }
    };

    return (
        <div className="page home">
            <div style={{marginBottom: "1rem"}}>
                <Carousel/>
            </div>

            {Object.keys(miniCarousels).map((title) => (
                <div className="mini-carousel" key={title}>
                    <MiniCarousel content={miniCarousels[title]} title={title}/>
                </div>
            ))}
        </div>
    );
};

export default Home;
