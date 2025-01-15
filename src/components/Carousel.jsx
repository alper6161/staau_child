import React, { useEffect } from "react";
import Glide from "@glidejs/glide"; // Glide.js kütüphanesi

// Yerel resimlerinizi ekleyin
import book1 from "../assets/images/ex.jpg";
import book2 from "../assets/images/ex2.jpg";


const Carousel = () => {
    useEffect(() => {
        const glide = new Glide(".glide", {
            type: "carousel",
            perView: 1,
            focusAt: "center",
            breakpoints: {
                1200: {
                    perView: 1,
                },
                800: {
                    perView: 1,
                },
                480: {
                    perView: 1,
                },
            },
        });

        glide.mount();
    }, []);

    return (
        <div className={`glide`}>
            <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                    <li className="glide__slide">
                        <img src={book1} alt="Kitap 1" />
                    </li>
                    <li className="glide__slide">
                        <img src={book2} alt="Kitap 2" />
                    </li>
                </ul>
            </div>

            <div className="glide__arrows" data-glide-el="controls">
                <button className="glide__arrow glide__arrow--left" data-glide-dir="<">«</button>
                <button className="glide__arrow glide__arrow--right" data-glide-dir=">">»</button>
            </div>

            <div className="glide__bullets" data-glide-el="controls[nav]">
                <button className="glide__bullet" data-glide-dir="=0"></button>
                <button className="glide__bullet" data-glide-dir="=1"></button>
                <button className="glide__bullet" data-glide-dir="=2"></button>
            </div>
        </div>
    );
};

export default Carousel;
