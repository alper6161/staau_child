import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import miniImg1 from "../assets/images/ex.jpg";
import miniImg2 from "../assets/images/ex2.jpg";
import miniImg3 from "../assets/images/ex3.jpg";
import miniImg4 from "../assets/images/ex4.jpg";
import miniImg5 from "../assets/images/ex5.jpg";
import {useNavigate} from "react-router-dom";

const MiniCarousel = ({ id, title }) => {
    const navigate = useNavigate();
    useEffect(() => {
        const glide = new Glide(`#${id}`, {
            type: "carousel",
            startAt: 0,
            perView: 5,
            focusAt: "center",
            gap: 10,
            breakpoints: {
                1200: { perView: 4 },
                800: { perView: 3 },
                480: { perView: 2 },
            },
        });

        glide.mount();
    }, [id]);

    const handleClick = () => {
        console.log('clicked');
        navigate(`/play/${id}`);
    }

    return (
        <div id={id} className="mini-glide">
            <h2>{title || "New Topics"}</h2>
            <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                    <li className="glide__slide" onClick={handleClick}>
                        <img src={miniImg1} alt="Mini 1" />
                    </li>
                    <li className="glide__slide">
                        <img src={miniImg2} alt="Mini 2" />
                    </li>
                    <li className="glide__slide">
                        <img src={miniImg3} alt="Mini 3" />
                    </li>
                    <li className="glide__slide">
                        <img src={miniImg4} alt="Mini 4" />
                    </li>
                    <li className="glide__slide">
                        <img src={miniImg5} alt="Mini 5" />
                    </li>
                </ul>
            </div>

            {/* Yön Okları */}
            <div className="glide__arrows" data-glide-el="controls">
                <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
                    «
                </button>
                <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
                    »
                </button>
            </div>

            {/* View More Link */}
            <div className="view-more">
                <a href="#">View More</a>
            </div>
        </div>
    );
};

export default MiniCarousel;
