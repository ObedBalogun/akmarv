import React, {useEffect, useState,} from 'react';
import {apiGetBeat} from "../backendQuery";
import Footer from "../components/Footer";
import {useCart} from "react-use-cart";

import {
    Container,
    Button,
    Modal,
    CardDeck,
    Card,
    Toast,
} from "react-bootstrap";
import Player from "../components/AudioPlayer";
import copy from 'copy-to-clipboard';
import BeatList from "../components/BeatList";
import {motion} from "framer-motion"


function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className={'beat-item'}
        >
            <Modal.Header closeButton>
                <div style={{marginBottom: 6.5 + "em"}}>
                    <img src={props.beatItem.artwork} alt="None"/>
                </div>
                <div className="beat-info">
                    <h2>{props.beatItem.title}</h2>
                    <p className={'beat-labels modal-beat-label'}>Genre - {props.beatItem.genre} </p>
                </div>
            </Modal.Header>
            <Modal.Body>
                <div className="license-types mt-5 main-deck">
                    <CardDeck>
                        <Card className={"text-center p-3"}>
                            <Card.Body>
                                <Card.Text>
                                    <div id="mp3" onClick={(e) => props.handleselection(props.beatItem, e)}>
                                        <span style={{fontSize: 1.5 + "em"}}>Mp3 license</span> <br/>
                                        <span style={{fontSize: 3.5 + "em"}}>$80</span><br/>
                                        <small className={'text-uppercase'}>Mp3 untagged.</small>
                                        <label className="container">
                                            <input type="checkbox"/>
                                            <span className={'radio-buttons'}/>
                                        </label>
                                    </div>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={"text-center p-3"}>
                            <Card.Body>
                                <Card.Text>
                                    <div id="wav" onClick={(e) => props.handleselection(props.beatItem, e)}>
                                        <span style={{fontSize: 1.5 + "em"}}>WAV license</span> <br/>
                                        <span style={{fontSize: 3.5 + "em"}}>$120</span><br/>
                                        <small className={'text-uppercase'}>Mp3 and Wav untagged.</small>
                                        <label className="container">
                                            <input type="checkbox"/>
                                            <span className={'radio-buttons'}/>
                                        </label>
                                    </div>
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card className={"text-center p-3"}>
                            <Card.Body>
                                <Card.Text>
                                    <div id="trackouts" onClick={(e) => props.handleselection(props.beatItem, e)}>
                                        <span style={{fontSize: 1.5 + "em"}}>WAV + Trackouts </span> <br/>
                                        <span style={{fontSize: 3.5 + "em"}}>$150</span><br/>
                                        <small className={'text-uppercase'}>Mp3 untagged.</small>
                                        <label className="container">
                                            <input type="checkbox"/>
                                            <span className={'radio-buttons'}/>
                                        </label>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={"text-center p-3"}>
                            <Card.Body>
                                <Card.Text>
                                    <div id="exclusive" onClick={(e) => props.handleselection(props.beatItem, e)}>
                                        <span style={{fontSize: 1.5 + "em"}}>Exclusive license</span> <br/>
                                        <span style={{fontSize: 3.5 + "em"}}>$300</span><br/>
                                        <small className={'text-uppercase'}>Mp3 untagged.</small>
                                        <label className="container">
                                            <input type="checkbox"/>
                                            <span className={'radio-buttons'}/>
                                        </label>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </div>
                <div className={"phone-deck"}>
                    <CardDeck>
                        <Card className={"text-center p-3"}>
                            <Card.Body>
                                <Card.Text>
                                    <div id="mp3" className="d-inline-block"
                                         onClick={(e) => props.handleselection(props.beatItem, e)}>
                                        <div className="float-left">
                                            <span style={{fontSize: 1.5 + "em"}}>Mp3 license</span> <br/>
                                            <small className={'text-uppercase'}>Mp3 tagged.</small>
                                        </div>
                                        <div className="float-right">
                                            <span style={{fontSize: 3.5 + "em"}}>$80</span><br/>
                                        </div>
                                        <label className="container">
                                            <input type="checkbox"/>
                                            <span className={'radio-buttons'}/>
                                        </label>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={"text-center p-3"}>
                            <Card.Body>
                                <Card.Text>
                                    <div id="wav" className="d-inline-block"
                                         onClick={(e) => props.handleselection(props.beatItem, e)}>
                                        <div className="float-left">
                                            <span style={{fontSize: 1.5 + "em"}}>WAV license</span> <br/>
                                            <small className={'text-uppercase'}>Mp3 & WAV tagged.</small>
                                        </div>
                                        <div className="float-right">
                                            <span style={{fontSize: 3.5 + "em"}}>$120</span><br/>
                                        </div>
                                        <label className="container">
                                            <input type="checkbox"/>
                                            <span className={'radio-buttons'}/>
                                        </label>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={"text-center p-3"}>
                            <Card.Body>
                                <Card.Text>
                                    <div id="trackouts" className="d-inline-block"
                                         onClick={(e) => props.handleselection(props.beatItem, e)}>
                                        <div className="float-left">
                                            <span style={{fontSize: 1.5 + "em"}}>WAV + Trackouts</span> <br/>
                                            <small className={'text-uppercase'}>Mp3 & WAV tagged.</small>
                                        </div>
                                        <div className="float-right">
                                            <span style={{fontSize: 3.5 + "em"}}>$150</span><br/>
                                        </div>
                                        <label className="container">
                                            <input type="checkbox"/>
                                            <span className={'radio-buttons'}/>
                                        </label>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className={"text-center p-3"}>
                            <Card.Body>
                                <Card.Text>
                                    <div id="exclusive" className="d-inline-block"
                                         onClick={(e) => props.handleselection(props.beatItem, e)}>
                                        <div className="float-left">
                                            <span style={{fontSize: 1.5 + "em"}}>Exclusive license</span> <br/>
                                            <small className={'text-uppercase'}>Mp3 & WAV tagged.</small>
                                        </div>
                                        <div className="float-right">
                                            <span style={{fontSize: 3.5 + "em"}}>$300</span><br/>
                                        </div>
                                        <label className="container">
                                            <input type="checkbox"/>
                                            <span className={'radio-buttons'}/>
                                        </label>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <div className="modal-footer-details mx-auto text-center">
                    <h4>you can also</h4>
                    <Button onClick={props.onHide}>
                        Negotiate price
                    </Button>
                </div>
            </Modal.Footer>
        </Modal>
    );
}

const BeatDetailPage = ({match}) => {
    const [showPlayer, setShowPlayer] = useState(false)
    const beat_id = match.params.beatId;
    const [beat, setBeat] = useState({});
    const {addItem, inCart} = useCart();
    const alreadyAdded = inCart(beat.id);
    const [modalShow, setModalShow] = React.useState(false);
    const [duration, setDuration] = useState(20)
    const [show, setShow] = useState(false);


    const handleCopy = () => {
        copy(`www.akmarv.com/beats/${beat.id}`, {debug: true})
        setShow(true)
    }
    const handleSelection = (beat, e) => {
        if (e.target.id === "mp3") {
            addItem({id: beat.title, name: beat.title, price: 80, license: "mp3"});
            setModalShow(false);

        } else if (e.target.id === "wav") {
            addItem({id: beat.title, name: beat.title, price: 120, license: "wav"})
            setModalShow(false)

        } else if (e.target.id === "trackouts") {
            addItem({id: beat.title, name: beat.title, price: 150, license: "wtrackouts"})
            setModalShow(false)

        } else if (e.target.id === "exclusive") {
            addItem({id: beat.title, name: beat.title, price: 300, license: "exclusive"})
            setModalShow(false)

        }

    }


    useEffect(() => {
        const setChosenBeat = (response) => {
                setBeat(response.data);
        }
        apiGetBeat(setChosenBeat, beat_id)

    }, [beat_id])
    useEffect(() => {
        beatDuration()
    })
    const beatDuration = () => {
        var audioElement = new Audio(beat.mp3_file);
        audioElement.addEventListener('loadeddata', () => {
            let beat_duration = audioElement.duration;

            var date = new Date(0);
            date.setSeconds(beat_duration);  //specify value for SECONDS here
            var timeString = date.toISOString().substr(14, 5);
            setDuration(timeString)
            // The duration variable now holds the duration (in seconds) of the audio clip
        })

    }

    var beat_image = beat.artwork
    return (
         <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}>
            <div className="fixed-top" >
                    <Toast autohide={true} className="mx-auto" onClose={() => setShow(false)} show={show} delay={1000}>
                        <Toast.Header>
                            <strong className="mr-auto">Link Copied</strong>
                        </Toast.Header>
                    </Toast>
            </div>
            <div className={'page-top beat-bg'} style={{
                backgroundImage: `url('${beat_image}')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="headline">
                    <div>
                        <p className={"text-white "}>{beat.title}</p>

                    </div>
                </div>
            </div>
            <Container fluid className={"mt-5"}>
                <div className="detail-header">
                    <div>
                        <img src={beat_image} className="mr-0" height={"320"} width={"320"} alt="No Picture"/>
                    </div>
                    <div className="p-4 detail-body">
                        <span className="prefix">Track</span>
                        <br/>
                        <h1 className="">
                            <span>{beat.title}</span>
                        </h1>
                        <div className={"d-block beat-labels modal-beat-label detail-length"}>{beat.genre}</div>
                        <br/>
                        <div className="detail-buttons">
                            <Button className={'cart-btn mr-1'} onClick={() => setShowPlayer(true)}>
                                <span>Play</span>
                                <span>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M16.6308 13.131C16.5743 13.189 16.3609 13.437 16.1622 13.641C14.9971 14.924 11.9576 17.024 10.3668 17.665C10.1252 17.768 9.51437 17.986 9.18802 18C8.8753 18 8.5772 17.928 8.29274 17.782C7.93814 17.578 7.65368 17.257 7.49781 16.878C7.39747 16.615 7.2416 15.828 7.2416 15.814C7.08573 14.953 7 13.554 7 12.008C7 10.535 7.08573 9.193 7.21335 8.319C7.22796 8.305 7.38383 7.327 7.55431 6.992C7.86702 6.38 8.47784 6 9.13151 6H9.18802C9.61374 6.015 10.509 6.395 10.509 6.409C12.0141 7.051 14.9834 9.048 16.1768 10.375C16.1768 10.375 16.5129 10.716 16.659 10.929C16.887 11.235 17 11.614 17 11.993C17 12.416 16.8724 12.81 16.6308 13.131Z"
                                            fill="#200E32"/>
                                    </svg>
                                </span>
                            </Button>
                            {alreadyAdded ?
                                <Button className={'mr-1 cart-btn'} disabled>
                                    <span>Already in Cart</span>
                                    <span>
                                        <svg className="ml-1" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M10.591 8.42485H12.6669C12.9816 8.42485 13.2289 8.16462 13.2289 7.85081C13.2289 7.52935 12.9816 7.27678 12.6669 7.27678H10.591C10.2762 7.27678 10.0289 7.52935 10.0289 7.85081C10.0289 8.16462 10.2762 8.42485 10.591 8.42485ZM15.1324 4.44562C15.5896 4.44562 15.8893 4.60635 16.1891 4.95843C16.4889 5.3105 16.5413 5.81565 16.4739 6.27412L15.7619 11.295C15.627 12.2602 14.8177 12.9712 13.8659 12.9712H5.68979C4.69307 12.9712 3.86871 12.1913 3.78627 11.181L3.09681 2.83755L1.96519 2.63855C1.66543 2.58498 1.45559 2.28648 1.50805 1.98032C1.56051 1.66728 1.85278 1.45987 2.16004 1.50655L3.9474 1.78133C4.2022 1.82801 4.38955 2.04156 4.41204 2.30179L4.55443 4.01624C4.57691 4.26193 4.77176 4.44562 5.01157 4.44562H15.1324ZM5.56974 14.1809C4.94023 14.1809 4.43062 14.7014 4.43062 15.3443C4.43062 15.9796 4.94023 16.5 5.56974 16.5C6.19175 16.5 6.70135 15.9796 6.70135 15.3443C6.70135 14.7014 6.19175 14.1809 5.56974 14.1809ZM14.0007 14.1809C13.3712 14.1809 12.8616 14.7014 12.8616 15.3443C12.8616 15.9796 13.3712 16.5 14.0007 16.5C14.6227 16.5 15.1323 15.9796 15.1323 15.3443C15.1323 14.7014 14.6227 14.1809 14.0007 14.1809Z"
                                                  fill="#200E32"/>
                                        </svg>

                                    </span>
                                </Button> :
                                <Button className={'mr-1 cart-btn'} onClick={() => setModalShow(true)}>
                                    <span>Add to Cart</span>
                                    <span>
                                        <svg className="ml-1" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M10.591 8.42485H12.6669C12.9816 8.42485 13.2289 8.16462 13.2289 7.85081C13.2289 7.52935 12.9816 7.27678 12.6669 7.27678H10.591C10.2762 7.27678 10.0289 7.52935 10.0289 7.85081C10.0289 8.16462 10.2762 8.42485 10.591 8.42485ZM15.1324 4.44562C15.5896 4.44562 15.8893 4.60635 16.1891 4.95843C16.4889 5.3105 16.5413 5.81565 16.4739 6.27412L15.7619 11.295C15.627 12.2602 14.8177 12.9712 13.8659 12.9712H5.68979C4.69307 12.9712 3.86871 12.1913 3.78627 11.181L3.09681 2.83755L1.96519 2.63855C1.66543 2.58498 1.45559 2.28648 1.50805 1.98032C1.56051 1.66728 1.85278 1.45987 2.16004 1.50655L3.9474 1.78133C4.2022 1.82801 4.38955 2.04156 4.41204 2.30179L4.55443 4.01624C4.57691 4.26193 4.77176 4.44562 5.01157 4.44562H15.1324ZM5.56974 14.1809C4.94023 14.1809 4.43062 14.7014 4.43062 15.3443C4.43062 15.9796 4.94023 16.5 5.56974 16.5C6.19175 16.5 6.70135 15.9796 6.70135 15.3443C6.70135 14.7014 6.19175 14.1809 5.56974 14.1809ZM14.0007 14.1809C13.3712 14.1809 12.8616 14.7014 12.8616 15.3443C12.8616 15.9796 13.3712 16.5 14.0007 16.5C14.6227 16.5 15.1323 15.9796 15.1323 15.3443C15.1323 14.7014 14.6227 14.1809 14.0007 14.1809Z"
                                                  fill="#200E32"/>
                                        </svg>

                                    </span>
                                </Button>
                            }
                            <Button className="share-btn" onClick={handleCopy}>
                                <i className="fas fa-share-alt"/>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="mt-lg-3">
                    <h3>Other Beats</h3>
                    <BeatList/>
                </div>
            </Container>
            {showPlayer ? <Player beat={beat}/> : null}
            <div className={"footer"}>
                <Footer className={"mt-5"}/>
            </div>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                beatItem={beat}
                handleselection={handleSelection}
            />
         </motion.div>
    );
}

export default BeatDetailPage;