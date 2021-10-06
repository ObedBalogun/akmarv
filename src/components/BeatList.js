import React, {useEffect, useState} from 'react';
import {apiGetBeats} from "../backendQuery";
import Beat from "./Beat";
import {Button, Table} from "react-bootstrap";
import {Link, useLocation} from "react-router-dom";

const BeatList = ({selectedBeat,searchQuery,beatsToShow}) => {
// const tester = [{"title":"Monna",
//                     "id":3},{"title":"Mnna",
//                     "id":3}]
    const [beats, setBeats] = useState([])
    const location = useLocation();
    const currentPage = '/beats'
    let showMore = location.pathname === currentPage
    // const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        const handleBeatsList = (response) => {
            // setBeats(tester);
            setBeats(response.data)
        }
        // handleBeatsList();
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
    const tableControl1 ={overflowY:"auto",height:"25em"}

    return (
        <div style={showMore?null:tableControl1}>
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
                {showMore ? filteredBeats.slice(0,beatsToShow).map((beat) => (
                    <tr key={beat.id} className={"h5"}>
                        <Beat key={beat.id} beat={beat} selectedBeat={selectedBeat}/>
                    </tr>
                )): filteredBeats.map((beat) => (
                    <tr key={beat.id} className={"h5"}>
                        <Beat key={beat.id} beat={beat} selectedBeat={selectedBeat}/>
                    </tr>
                ))}

                </tbody>
            </Table>


        </div>
    );
}

export default BeatList;