import React, {useEffect, useState} from 'react';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const ContactPage = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState(false);


    const onSubmit = e => {
        e.preventDefault();


    }
    return (
        <>
            <Navigation/>
                <div className="contact-div-2 mt-4">
                    <h2 className={'text-center font-weight-bold'}>Contact me for mixing and mastering orders.</h2>
                    <div className="upload-form m-5">
                        <Container>
                            <Form onSubmit={onSubmit}>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label className="text-black">Name</Form.Label>
                                        <Form.Control type="text" placeholder="Your Name" className={'upload-form-input'}
                                        onChange={e => setName(e.target.value) }/>
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" className={'upload-form-input'}
                                        onChange={e => setEmail(e.target.value) }/>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>Subject</Form.Label>
                                        <Form.Control placeholder="What this message concerns" type={"text"} className={'upload-form-input'}
                                        onChange={e => setSubject(e.target.value) }/>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as="textarea" rows={3}  className={'upload-form-input'} onChange={e => setMessage(e.target.value) }/>
                                    </Form.Group>
                                </Form.Row>
                                <Row>
                                    <Button className={"button-2 mx-auto mb-5"} type={"submit"}>Send Message</Button>
                                </Row>
                            </Form>
                        </Container>
                    </div>
                </div>
            <Footer/>
        </>
    );
};

export default ContactPage;