import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import book1 from "../assets/images/ex.jpg";
import book2 from "../assets/images/ex2.jpg";
import {Button} from "@mui/material";
import {PlayCircle} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";


const Carousel = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const glide = new Glide(".glide", {
            type: "carousel",
            startAt: 0,
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

    const handleClick = () => {
        console.log('clicked');
        navigate(`/player`);
    }

    return (
        <div className={`glide`}>
            <div className="carousel-watch-button">
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ fontWeight: "bold" }}
                    startIcon={<PlayCircle className="mr-1" style={{fontSize: '2rem'}}/>}
                    onClick={handleClick}
                >
                    Watch
                </Button>
            </div>
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
            </div>
        </div>
    );
};

export default Carousel;
