import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const CustomAudioPlayer = ({ audioSrc, imageSrc, title }) => {
    return (
        <div className="audio-player-container">
            <img src={imageSrc} alt="Book Cover" className="audio-player-image" />
            <h3>{title}</h3>
            <AudioPlayer
                src={audioSrc}
                showJumpControls
                customAdditionalControls={[]}
                autoPlay={false}
                layout="horizontal"
            />
        </div>
    );
};

export default CustomAudioPlayer;
