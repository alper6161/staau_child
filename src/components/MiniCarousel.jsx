import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import miniImg1 from "../assets/images/ex.jpg";
import miniImg2 from "../assets/images/ex2.jpg";
import miniImg3 from "../assets/images/ex3.jpg";
import miniImg4 from "../assets/images/ex4.jpg";
import miniImg5 from "../assets/images/ex5.jpg";
import {useNavigate} from "react-router-dom";

const MiniCarousel = ({ content, title }) => {
    const navigate = useNavigate();
    useEffect(() => {
        if(!content || !content.length || !title) return;
        const glide = new Glide(`#${title}`, {
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

        console.log(content);
        glide.mount(``);
    }, [content,title]);

    const handleClick = () => {
        console.log('clicked');
        navigate(`/play/${id}`);
    }

    return (
        <div id={title} className="mini-glide">
            <h2>{title || "New Topics"}</h2>
            <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                    {content.map((detail) =>
                        <li className="glide__slide" key={detail.id} onClick={() => handleClick(detail.url)}>
                            <img src={detail.url} alt="img" />
                        </li>
                    )}
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
