import React, {useEffect, useState} from 'react';
import {apiGetBeats} from "../backendQuery";
import Beat from "./Beat";
import { Table} from "react-bootstrap";

const BeatList = ({selectedBeat,searchQuery}) => {

    const [beats, setBeats] = useState([])
    useEffect(() => {
        const handleBeatsList = (response) => {
            setBeats(response.data);
        }
        apiGetBeats(handleBeatsList)
    },[])

    // Search

    const filterBeats = (beats, query) => {
        if (!query) {
            return beats;
        }

        return beats.filter((beat) => {
            const beatTitleLower = beat.title.toLowerCase();
            const beatTitle = beat.title
            const beatGenreLower = beat.genre.toLowerCase();
            const beatGenre = beat.genre
            return beatTitleLower.includes(query)||beatTitle.includes(query)||beatGenreLower.includes(query)||beatGenre.includes(query);
        });
    };
    const filteredBeats = filterBeats(beats, searchQuery);


    return (
        <>
            <Table className={'text-center'} hover >
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Length</th>
                    <th>Genre</th>
                    <th>Options</th>
                </tr>
                </thead>
                <tbody className={'font-weight-bold'}>
                {filteredBeats.map((beat) => (

                    <tr key={beat.title} className={"h5"}>
                        <Beat key={beat.id} beat={beat} selectedBeat={selectedBeat}/>
                    </tr>
                ))}
                </tbody>
            </Table>


        </>
    );
}

export default BeatList;