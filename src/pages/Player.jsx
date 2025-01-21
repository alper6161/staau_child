import React from "react";
import CustomAudioPlayer from "../components/CustomAudioPlayer.jsx";

import miniImg1 from "../assets/images/ex.jpg";
import audioFile from "../assets/audios/ex.mp3";



const Player = () => {
    return <div className="page">
        <CustomAudioPlayer
            audioSrc={audioFile}
            imageSrc={miniImg1}
            title="Example Book Title"
        />
    </div>;
};

export default Player;
