import React, {useEffect, useState} from 'react';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {Button, Col, Container, Form, Row, Toast} from "react-bootstrap";
import axios from "axios";

const ContactPage = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState(false);
    const [show, setShow] = useState(false);



    const onSubmit = e => {
        e.preventDefault();

        axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
        axios.defaults.xsrfCookieName = 'csrftoken';
        axios.defaults.withCredentials = true;
        axios.post('/api/client/contact-me', {subject, message, email,name}).then(r  => setShow(true))

    }
    return (
        <>
            <Navigation/>
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