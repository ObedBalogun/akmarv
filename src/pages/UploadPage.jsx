import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import Navigation from "../components/Navigation";
import axios from "axios";

const UploadPage = () => {
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [mp3, setMp3] = useState();
    const [wav, setWav] = useState();
    const [stems, setStems] = useState();
    const [artwork, setArtwork] = useState();

    const changeHandlerMp3 = (e) => {
        setMp3(e.target.files[0])

    }
    const changeHandlerWav = (e) => {
        setWav(e.target.files[0])
    }
    const changeHandlerStems = (e) => {
        setStems(e.target.files[0])
    }
    const changeHandlerArtwork = (e) => {
        setArtwork(e.target.files[0])
    }

    const onSubmit = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('mp3', mp3);
        formData.append('wav', wav);
        formData.append('stems', stems);
        formData.append('title',title)
        formData.append('genre',genre)
        formData.append('artwork',artwork)

        axios.post('/api/client/beats/', formData).then(()=>{
            window.location.replace('/')
        })
    }

    return (
        <>
            <Navigation/>
            <div className="upload-div">
                <h2 className={'text-center font-weight-bold'}>Upload Beats Here</h2>
                <div className="upload-form m-5">
                    <Container>
                        <Form onSubmit={onSubmit}>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Beat Title</Form.Label>
                                    <Form.Control type="text" id={'title'} onChange={e => setTitle(e.target.value) } className={'upload-form-input'}/>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Genre</Form.Label>
                                    <Form.Control type="text" id={'genre'} onChange={e => setGenre(e.target.value) } className={'upload-form-input'}/>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Artwork</Form.Label>
                                    <Form.Control type="file" id={'artwork'} onChange={changeHandlerArtwork}  className={'upload-form-input'}/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Mp3 File</Form.Label>
                                    <Form.Control type={"file"} id={'mp3_file'} onChange={changeHandlerMp3 } className={'upload-form-input rounded'}/>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Wav File</Form.Label>
                                    <Form.Control type="file"  id={'wav_file'} onChange={changeHandlerWav } className={'upload-form-input rounded'}/>
                                </Form.Group>

                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <small className={'mx-auto'}>Please remember to upload your stem tracks as a zip file.</small>
                                    <br/>
                                    <Form.Label>Stem Tracks</Form.Label>
                                    <Form.Control type="file" id={'stems'} onChange={changeHandlerStems} className={'upload-form-input rounded'}/>
                                </Form.Group>
                            </Form.Row>
                            <Row>
                                <Button className={"button-2 mx-auto mb-5"} type={"submit"}>Upload File </Button>
                            </Row>
                        </Form>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default UploadPage;