import React, {useEffect, useState} from 'react';
import {apiGetBeat} from "../backendQuery";
import Footer from "../components/Footer";
import {useCart} from "react-use-cart";
import {Container, Table, ButtonGroup, Button, Modal, CardDeck, Card} from "react-bootstrap";
import Player from "../components/AudioPlayer";


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
    const beat_id = match.params.beatTitle;
    const [beat, setBeat] = useState({});
    const {addItem, inCart} = useCart();
    const alreadyAdded = inCart(beat.title);
    const [modalShow, setModalShow] = React.useState(false);
    const [duration, setDuration] = useState(null)


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
        beatDuration();

    }, [])
    const beatDuration =()=>{
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
        <>
            <Container className={"m-5"}>
                <div className={"d-flex"}>
                    <img src={beat_image} className="mr-0" height={"150"} width={"150"} alt="No Picture"/>
                    <h2 className={"m-5"}>{beat.title}</h2>
                    <br/>
                    <div className={"d-block mt-5 beat-labels modal-beat-label detail-length"}>{beat.genre}</div>


                </div>
                <Container>
                     <Table className={'text-center mx-auto mt-5 mb-5'} hover>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Length</th>
                        <th>Genre</th>
                        <th>Options</th>
                    </tr>
                    </thead>
                    <tbody className={'font-weight-bold'}>
                    <tr onClick={() => setShowPlayer(true)}>
                        <td>{beat.title}</td>
                        <td>{duration}</td>
                        <td>
                            <span className={"beat-labels modal-beat-label detail-length"}>{beat.genre}</span>
                        </td>
                        <td>
                            <div>
                                {alreadyAdded ?
                                    <button className={'mobile-btn mx-auto'} disabled
                                            onClick={() => setModalShow(true)}>
                                        <i className={"fa fa-shopping-cart"}/>
                                    </button> :
                                    <button className={'mobile-btn mx-auto'} onClick={() => setModalShow(true)}>
                                        <i className={"fa fa-shopping-cart"}/>
                                    </button>
                                }

                            </div>
                            <ButtonGroup>
                                {alreadyAdded ?
                                    <Button className={'mr-3 button-1 cart-btn'} disabled
                                            onClick={() => setModalShow(true)}>
                                        Already in Cart
                                    </Button> :
                                    <Button className={'mr-3 button-1 cart-btn'} onClick={() => setModalShow(true)}>
                                        Add to Cart
                                    </Button>
                                }
                                <Button className={"button-1 share-btn"}>
                                    Share Link
                                </Button>

                            </ButtonGroup>
                        </td>
                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            beatItem={beat}
                            handleselection={handleSelection}
                        />
                    </tr>
                    </tbody>
                </Table>
                </Container>
            </Container>
            {showPlayer ? <Player beat={beat}/> : null}

            <Footer className={"mt-5"}/>

        </>
    );
}

export default BeatDetailPage;