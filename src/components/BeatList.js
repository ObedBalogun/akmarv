import React, {useEffect, useState} from 'react';
import {apiGetBeats} from "../backendQuery";
import Beat from "./Beat";
import { Table} from "react-bootstrap";

const BeatList = ({selectedBeat,searchQuery}) => {

    const [beats, setBeats] = useState([])
    var beatm= [
        {"title":"ASS",
        }
        ]

    useEffect(() => {
        const handleBeatsList = (response) => {
            setBeats(beatm);
        }
        handleBeatsList();
        // apiGetBeats(handleBeatsList)
    },[])

    // Search

    const filterBeats = (beats, query) => {
        if (!query) {
            return beats;
        }

        return beats.filter((beat) => {
            const beatTitle = beat.title.toLowerCase();
            const beatGenre = beat.genre.toLowerCase();
            return beatTitle.includes(query)|| beatGenre.includes(query);
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

                    <tr key={beat.title} className={"h5"} onClick={()=>selectedBeat(beat)}>
                        <Beat key={beat.id} beat={beat}/>
                    </tr>
                ))}
                </tbody>
            </Table>


        </>
    );
}

export default BeatList;