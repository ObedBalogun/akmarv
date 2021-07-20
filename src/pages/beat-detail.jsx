import React, {useEffect, useState} from 'react';
import {apiGetBeat} from "../backendQuery";

const BeatDetailPage = () => {
    var beat_id = window.location.href.slice(-1)
    const [beat, setBeat] = useState();
    useEffect(() =>{
        const setChosenBeat = (response) =>{
            setBeat(response.data);

        }
        apiGetBeat(setChosenBeat,beat_id)
    },[])
    return (
        <div>
            {beat}
        </div>
    );
}

export default BeatDetailPage;