import React, {useState} from 'react';
import {Button, Card, Modal} from "react-bootstrap";



const License = ({license}) => {
    function LicenseModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className={'beat-item'}
        >
            <Modal.Header style={{ background: "#ae3131",
                                    color:"white"}} closeButton>
                <div className="beate-info ml-lg-auto">
                    {/*<h2>{props.license.license_type}</h2>*/}
                    <h2>{props.license.license_type} License Info</h2>
                </div>
            </Modal.Header>
            <Modal.Body className={"license-modal-body"}>
                <div className="pdf-body">
                    <div id="recording">
                        <i className="fas fa-microphone-alt"/> &nbsp;
                        <span>
                            {props.license.recording}
                        </span>
                    </div>
                    <div id="distribution">
                        <i className="fas fa-layer-group"/> &nbsp;
                        <span>
                            {props.license.distribution}
                        </span>
                    </div>
                    <div id="streams" style={{ position: "relative",
                                  right: "0.3em"}}>
                        <i className="fas fa-wifi"/> &nbsp;
                        <span>
                            {props.license.streams}
                        </span>
                    </div>
                    <div id="videos">
                        <i className="fas fa-video"/> &nbsp;
                        <span>
                            {props.license.videos}
                        </span>
                    </div>
                    <div id="performances">
                        <i className="fas fa-microphone"/> &nbsp;
                        <span>
                    {props.license.performances}
                </span>
                    </div>
                    <div id="broadcasting">
                        <i className="fas fa-broadcast-tower"/> &nbsp;
                        <span>
                            {props.license.broadcasting}
                        </span>
                    </div>
                </div>
                {/*/!*<Document file={props.license.license_content}>*!/*/}
                {/*<Document file={hm}>*/}
                {/*        <Page pageNumber={1} />*/}
                {/*</Document>*/}
            </Modal.Body>
        </Modal>
    );
}
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Card >
                <Card.Header >
                    <div className={"text-center card-info text-nowrap"} style={{paddingTop:"5em"}}>
                            <span className={"license-name d-block"}>
                                {license.license_type}
                            </span>
                            <span className={"license-price d-block font-weight-bold"}>
                                {license.price}
                            </span>
                            <span className={'text-uppercase font-weight-bold d-block'}>
                                per unit
                            </span>
                        </div>
                    <br/>
                </Card.Header>
                <Card.Body>
                        <div className={"license-button"}>
                            <Button onClick={()=>setModalShow(true)}>Read Permissions</Button>
                        </div>
                    </Card.Body>
            </Card>
            <LicenseModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                license = {license}
            />
        </>
    );

}

export default License;