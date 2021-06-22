import React, {useState} from 'react';
import {Button, Card, Modal} from "react-bootstrap";
import {Document,Page} from "react-pdf/dist/umd/entry.webpack";
import hm from "../sample.pdf"
// import Page from "react-pdf";


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
            <Modal.Header closeButton>
                <div className="beat-info">
                    <h2>{props.license.license_type}</h2>
                </div>
            </Modal.Header>
            <Modal.Body>
                <div className="pdf-body">
                <Document file={hm}>
                        <Page pageNumber={1} />
                </Document>
                </div>

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
                                ${license.license_price}
                            </span>
                            <span className={'text-uppercase font-weight-bold d-block'}>
                                per unit
                            </span>
                        </div>
                    <br/>
                </Card.Header>
                <Card.Body>
                        <div className={"license-button"}>
                            <Button onClick={()=>setModalShow(true)}>Read full license</Button>
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