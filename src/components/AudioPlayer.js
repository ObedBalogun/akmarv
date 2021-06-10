import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Player = ({beat}) => {
    return (
        <>
            <AudioPlayer
                autoPlay
                src={beat.mp3_file}
                onPlay={e => console.log("onPlay")}
                />
        </>
    );
}

export default Player;