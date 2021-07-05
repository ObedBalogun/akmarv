import React, { useState} from 'react';
import BeatList from "../components/BeatList";
import Navigation from "../components/Navigation"
import {InputGroup, FormControl, Button, Form, Container, Row, Col, Toast} from "react-bootstrap"
import Player from "../components/AudioPlayer";
import Footer from "../components/Footer";
import LicenseList from "../components/LicenseList";
import axios from "axios";


const IndexPage = () => {
    const [beat, setBeat] = useState("")
    const [showPlayer, setShowPlayer] = useState(false)
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [show, setShow] = useState(false);
    // Music Player
    const selectedBeat =(beat)=>{
        setBeat(beat);
        setShowPlayer(true);
    }
    //  Send Mail
    const onSubmit = e => {
        e.preventDefault();

        axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
        axios.defaults.xsrfCookieName = 'csrftoken';
        axios.defaults.withCredentials = true;
        axios.post('/api/client/contact-me/', {subject, message, email,name}).then(
             (r) => {
                setShow(true)
                window.location.replace("http://www.akmarv.com")
            }
        )

    }




    const {search} = window.location;
    const query  = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');

    return (
        <>
            <Navigation/>
            <div className={'page-top main-bg'} style={{backgroundImage:"url('/static/background.png')",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>
                <div className="headliner">
                    <div className="input-box mx-auto">
                        <Form>
                            <div className={"mx-auto main-search"} >
                                <InputGroup>
                                    <FormControl
                                        type="search"
                                        placeholder="What are you looking for?"
                                        aria-label="beats-query-search"
                                        aria-describedby="basic-addon2"
                                        onChange={e => setSearchQuery(e.target.value)}
                                    />
                                </InputGroup>
                                <button>
                                    <i className="fa fa-search">

                                    </i>
                                </button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
            <div className="beatslist">
                <Container>
                <BeatList searchQuery={searchQuery} selectedBeat={selectedBeat}/>

                <div className={'show-more'}>
                    <Button className='mt-5 mb-5 button-2 col-sm-12 col-lg-2'>
                        Browse All Tracks
                    </Button>
                </div>
                </Container>
            </div>

            <div className="page-bottom main-bg">
                <div className="d-flex justify-content-center py-5">
                    <h2 className={'text-center text-white font-weight-bold'}>
                        Beat Licenses
                    </h2>
                </div>
                <div className="license">
                    <LicenseList />
                </div>
                <div className="contact-div">
                    <h2 className={'text-center text-white font-weight-bold'}>Contact me for mixing and mastering orders.</h2>
                    <div className="contact-form m-5">
                        <Container>
                            <Row>
                  <Col xs={6}>
                    <Toast onClose={() => setShow(false)} show={show} delay={1000}
                           style={{
                               position: 'absolute',
                               top: 0,
                               right: 0,
                           }}>
                      <Toast.Header>
                        <strong className="mr-auto">Email Sent</strong>
                      </Toast.Header>
                    </Toast>
                  </Col>
               </Row>
                            <Form onSubmit={onSubmit}>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" className={'contact-form-input'} onChange={e => setName(e.target.value) }/>
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" className={'contact-form-input'} onChange={e => setEmail(e.target.value) }/>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>Subject</Form.Label>
                                        <Form.Control type={"text"} className={'contact-form-input'} onChange={e => setSubject(e.target.value) }/>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as="textarea" rows={3}  className={'contact-form-input'} onChange={e => setMessage(e.target.value) }/>
                                    </Form.Group>
                                </Form.Row>
                                <Row>
                                    <Button className={"button-2 mx-auto mb-5"} type={"submit"}>Send Message</Button>
                                </Row>
                            </Form>
                        </Container>
                    </div>
                </div>
            </div>
            {showPlayer ? <Player beat={beat} />: null}


            <Footer/>
        </>
    );
}

export default IndexPage;