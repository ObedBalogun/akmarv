import React, {useEffect, useState} from 'react';
import {apiGetBeat} from "../backendQuery";
import Footer from "../components/Footer";
import {Container,Col} from "react-bootstrap";
import {useParams} from "react-router";

const BeatDetailPage = ({match}) => {
    // const {title} = useParams();
    const beat_id = match.params.beatId;
    console.log(beat_id)
    const [beat, setBeat] = useState({});
    useEffect(() => {
        const setChosenBeat = (response) =>{
            setBeat(response.data);

        }
        apiGetBeat(setChosenBeat,beat_id)
    },[])
    var beat_image = beat.artwork
    return (
        <>
               <Container className={"m-5"}>
                   <div className={"d-flex"}>
                          <img src={beat_image}  className="mr-0" height={"100"} width={"100"} alt="No Picture"/>
                       <h2 className={"ml-0"}>{beat.title}</h2>
                   </div>
               </Container>
            <Footer/>

        </>
    );
}

export default BeatDetailPage;