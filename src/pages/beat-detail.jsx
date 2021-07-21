import React, {useEffect, useState} from 'react';
import {apiGetBeat} from "../backendQuery";

const BeatDetailPage = () => {
    const title = localStorage.getItem("beat_title")
    const [beat, setBeat] = useState([]);
    useEffect(() =>{
        const setChosenBeat = (response) =>{
            setBeat(response.data);

        }
        apiGetBeat(setChosenBeat,title)
    },[])

    return (
        <div>
            <h1>{beat.title}</h1>
        </div>
    );
}

export default BeatDetailPage;