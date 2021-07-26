import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Player = ({beat}) => {
    return (
        <>
            <AudioPlayer
                className="audio"
                autoPlay
                src={beat.mp3_file}
                showSkipControls={false}
                onPlay={e => console.log("onPlay")}
                />
                <div className="playing-song-title button animated">
                    <span>Now playing - {beat.title}</span>
                </div>
        </>
    );
}

export default Player;