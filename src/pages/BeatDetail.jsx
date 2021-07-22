import React, {useEffect, useState} from 'react';
import {apiGetBeat} from "../backendQuery";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {Container,Col,Row} from "react-bootstrap";

const BeatDetailPage = () => {
    const title = localStorage.getItem("beat_title")
    const [beat, setBeat] = useState("");
    useEffect(() =>{
        const setChosenBeat = (response) =>{
            setBeat(response.data);

        }
        apiGetBeat(setChosenBeat,title)
    },[])

    return (
        <>
            <Navigation/>
               <Container>
                   <div>
                       <Col lg={4}>
                          <img src={beat.artwork} alt="None"/>
                       </Col>
                       <h2>{beat.title}</h2>
                   </div>
               </Container>
            <Footer/>

        </>
    );
}

export default BeatDetailPage;