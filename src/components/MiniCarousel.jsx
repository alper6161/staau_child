import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import { useNavigate } from "react-router-dom";

const MiniCarousel = ({ content = [], title }) => {
    const navigate = useNavigate();
    const safeId = title ? title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") : `carousel-${Math.floor(Math.random() * 10000)}`;

    useEffect(() => {
        if (!content.length) return;
        const glide = new Glide(`#${safeId}`, {
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
        return () => glide.destroy();
    }, [content, safeId]);

    const handleClick = (id) => {
        if (id) {
            navigate(`/play/${id}`);
        }
    };

    return (
        <div id={safeId} className="mini-glide">
            {title && <h2>{title}</h2>}
            <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                    {content.map((detail) => (
                        <li className="glide__slide" key={detail.id} onClick={() => handleClick(detail.id)}>
                            <img src={detail.img} alt="img" />
                        </li>
                    ))}
                </ul>
            </div>

            <div className="glide__arrows" data-glide-el="controls">
                <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
                    «
                </button>
                <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
                    »
                </button>
            </div>

            <div className="view-more">
                <a href="#">View More</a>
            </div>
        </div>
    );
};

export default MiniCarousel;
