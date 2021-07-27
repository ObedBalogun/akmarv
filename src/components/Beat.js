import React, {useEffect, useState} from 'react';
import {Button, ButtonGroup, Card, CardDeck, Modal} from "react-bootstrap";
import {useCart} from "react-use-cart";
import {Link, useLocation} from "react-router-dom";


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
                <div style={{marginBottom:6.5 +"em"}}>
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
                                    <div id="mp3"  onClick={(e) => props.handleselection(props.beatItem,e) }>
                                    <span  style={{fontSize:1.5+"em"}}>Mp3 license</span> <br/>
                                    <span style={{fontSize:3.5+"em"}}>$80</span><br/>
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
                                     <div id="wav"  onClick={(e) => props.handleselection(props.beatItem,e) }>
                                        <span style={{fontSize:1.5+"em"}}>WAV license</span> <br/>
                                        <span style={{fontSize:3.5+"em"}}>$120</span><br/>
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
                                    <div id="trackouts" onClick={(e) => props.handleselection(props.beatItem,e) }>
                                        <span style={{fontSize:1.5+"em"}}>WAV + Trackouts </span> <br/>
                                        <span style={{fontSize:3.5+"em"}}>$150</span><br/>
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
                                    <div id="exclusive" onClick={(e) => props.handleselection(props.beatItem,e) }>
                                        <span style={{fontSize:1.5+"em"}}>Exclusive license</span> <br/>
                                        <span style={{fontSize:3.5+"em"}}>$300</span><br/>
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
                                    <div id="mp3" className="d-inline-block" onClick={(e) => props.handleselection(props.beatItem,e) }>
                                        <div className="float-left">
                                            <span  style={{fontSize:1.5+"em"}}>Mp3 license</span> <br/>
                                            <small className={'text-uppercase'}>Mp3 tagged.</small>
                                        </div>
                                        <div className="float-right">
                                            <span style={{fontSize:3.5+"em"}}>$80</span><br/>
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
                                    <div id="wav" className="d-inline-block" onClick={(e) => props.handleselection(props.beatItem,e) }>
                                        <div className="float-left">
                                            <span  style={{fontSize:1.5+"em"}}>WAV license</span> <br/>
                                            <small className={'text-uppercase'}>Mp3 & WAV tagged.</small>
                                        </div>
                                        <div className="float-right">
                                            <span style={{fontSize:3.5+"em"}}>$120</span><br/>
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
                                    <div id="trackouts" className="d-inline-block" onClick={(e) => props.handleselection(props.beatItem,e) }>
                                        <div className="float-left">
                                            <span  style={{fontSize:1.5+"em"}}>WAV + Trackouts</span> <br/>
                                            <small className={'text-uppercase'}>Mp3 & WAV tagged.</small>
                                        </div>
                                        <div className="float-right">
                                            <span style={{fontSize:3.5+"em"}}>$150</span><br/>
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
                                    <div id="exclusive" className="d-inline-block" onClick={(e) => props.handleselection(props.beatItem,e) }>
                                        <div className="float-left">
                                            <span  style={{fontSize:1.5+"em"}}>Exclusive license</span> <br/>
                                            <small className={'text-uppercase'}>Mp3 & WAV tagged.</small>
                                        </div>
                                        <div className="float-right">
                                            <span style={{fontSize:3.5+"em"}}>$300</span><br/>
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
                    <h4 >you can also</h4>
                    <Button onClick={props.onHide}>
                        Negotiate price
                    </Button>
                </div>
            </Modal.Footer>
        </Modal>
    );
}

const Beat = ({beat,selectedBeat}) => {
    const [duration, setDuration] = useState(null)

    useEffect(()=>{
        var audioElement = new Audio(beat.mp3_file);
        audioElement.addEventListener('loadeddata', () => {
        let beat_duration = audioElement.duration;

        var date = new Date(0);
        date.setSeconds(beat_duration);  //specify value for SECONDS here
        var timeString = date.toISOString().substr(14, 5);
        setDuration(timeString)
        // The duration variable now holds the duration (in seconds) of the audio clip
        })
    },[])

    const { addItem,inCart } = useCart();

    const [modalShow, setModalShow] = React.useState(false);
    const handleSelection = (beat,e) => {
        if(e.target.id ==="mp3"){
            addItem({id:beat.title,name:beat.title,price:80,license:"mp3"});
            setModalShow(false);

        }
        else if(e.target.id === "wav"){
            addItem({id:beat.title,name:beat.title,price:120,license:"wav"})
            setModalShow(false)

        }
        else if(e.target.id === "trackouts"){
            addItem({id:beat.title,name:beat.title,price:150,license:"wtrackouts"})
            setModalShow(false)

        }
        else if(e.target.id === "exclusive"){
            addItem({id:beat.title,name:beat.title,price:300,license:"exclusive"})
            setModalShow(false)

        }

    }

    const alreadyAdded = inCart(beat.title);
    const location = useLocation();
    var currentPage = `/beats/${beat.title}`
    let reload = location.pathname === currentPage
    console.log(reload)
    const refresh = () =>{
        window.location.reload()
    }

    return (
        <>
            <td onClick={()=>selectedBeat(beat)}>
                <span >
                    <img src={beat.artwork} alt=""/>
                </span>
                <span className={'beat-title-col'}>
                    {beat.title}
                </span>
            </td>
            <td className={'detail-length'}>{duration}</td>
            <td>
                <span className={"beat-labels modal-beat-label detail-length"}>{beat.genre}</span>
            </td>
            <td>
                <div className="d-flex">
                      {alreadyAdded ?
                          <button className={'mobile-btn mx-auto'} disabled onClick={() => setModalShow(true)}>
                              <i className={"fa fa-shopping-cart"} style={{marginTop: "4px"}}/>
                          </button> :
                          <button className={'mobile-btn mx-auto'} onClick={() => setModalShow(true)}>
                              <i className={"fa fa-shopping-cart"} style={{marginTop: "4px"}}/>
                          </button>
 }
                    <button className={'mobile-btn'}>
                        <Link to ={`/beats/${beat.title}`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8861 2H16.9254C19.445 2 21.5 4 21.5 6.44V17.56C21.5 20.01 19.445 22 16.9047 22H11.8758C9.35611 22 7.29083 20.01 7.29083 17.57V12.77H13.6932L12.041 14.37C11.7312 14.67 11.7312 15.16 12.041 15.46C12.1959 15.61 12.4024 15.68 12.6089 15.68C12.8051 15.68 13.0117 15.61 13.1666 15.46L16.1819 12.55C16.3368 12.41 16.4194 12.21 16.4194 12C16.4194 11.8 16.3368 11.6 16.1819 11.46L13.1666 8.55C12.8568 8.25 12.3508 8.25 12.041 8.55C11.7312 8.85 11.7312 9.34 12.041 9.64L13.6932 11.23H7.29083V6.45C7.29083 4 9.35611 2 11.8861 2ZM2.5 11.9999C2.5 11.5799 2.85523 11.2299 3.2815 11.2299H7.29052V12.7699H3.2815C2.85523 12.7699 2.5 12.4299 2.5 11.9999Z" fill="#ae3131"/>
                        </svg>
                        </Link>
                    </button>

                </div>
                <ButtonGroup>
                    {alreadyAdded   ?
                        <Button className={'mr-3 button-1 cart-btn'} disabled onClick={() => setModalShow(true)}>
                         Already in Cart
                    </Button>   :
                    <Button className={'mr-3 button-1 cart-btn'} onClick={() => setModalShow(true)}>
                        Add to Cart
                    </Button>
                    }
                    {reload ?<Button className={"button-1 share-btn"} onClick={refresh}>
                        View Beat
                        </Button>
                    : <Button className={"button-1 share-btn"}>
                            <Link to={`/beats/${beat.title}`}>
                                View Beat
                            </Link>
                        </Button>

                    }


                </ButtonGroup>
            </td>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                beatItem = {beat}
                handleselection ={handleSelection}
            />
        </>
    );
}

export default Beat;