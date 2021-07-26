import React, {useState} from 'react';
import { useCart} from "react-use-cart";
import {Button, Col, Container, Form, Row, Table,Toast} from "react-bootstrap";
import Navigation from "./Navigation";
import axios from "axios";

const Cart = () => {
    const { items,cartTotal,removeItem ,emptyCart} = useCart();
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const [show, setShow] = useState(false);

    const onSubmit = e => {
        setShow(true)
        e.preventDefault();

        const user = {
            email: email,
            firstName: firstName,
            lastName: lastName
        };

        axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
        axios.defaults.xsrfCookieName = 'csrftoken';
        axios.defaults.withCredentials = true;

        axios.post('/api/client/manage-payment/', {user,cartTotal,items})
            .then(function (response) {
                setTimeout(()=>{
                window.location.replace(response.data.data);
                emptyCart();
            },5000)
        })
    }
       return (
           <>
               <Row>
                  <Col xs={6}>
                    <Toast onClose={() => setShow(false)} show={show} delay={1000}
                           style={{
                               position: 'absolute',
                               top: 0,
                               right: 0,
                           }}>
                      <Toast.Header>
                        <strong className="mr-auto">Processing Order</strong>
                      </Toast.Header>
                    </Toast>
                  </Col>
               </Row>
               <Container>
                   <div className="mt-5">
                        <h2 className={'text-center font-weight-bold'}>Confirm Your Order</h2>
                   </div>
                   <Table className={'text-center'} hover >
                       <thead>
                       <tr>
                           <th>Cart Item</th>
                           <th>License Type</th>
                           <th>Price</th>
                           <th>Options</th>
                       </tr>
                       </thead>
                       <tbody className={'font-weight-bold'}>
                       {items.map((item) => (
                           <tr key={item.id} className={"h5"}>
                               <td>{item.name}</td>
                               <td>{item.license}</td>
                               <td>{item.price}</td>
                               <td>
                                   <button className={"button-1"} onClick={() => removeItem(item.id)}>Remove Item &times;</button>
                               </td>
                           </tr>
                       ))}
                       </tbody>
                   </Table>
               </Container>
               <div className="checkout-div mt-5">
                        <h2 className={'text-center font-weight-bold'}>Fill this out to complete your order</h2>
                        <div className="contact-form m-5">
                            <Container>
                                <Form onSubmit={onSubmit}>
                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control type="text" id={"first_name"}
                                                          className={'checkout-form-input'}
                                                          onChange={e => setFirstName(e.target.value)}

                                            />
                                        </Form.Group>
                                        <Form.Group as={Col}>
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control type="text" className={'checkout-form-input'}
                                                          onChange={e => setLastName(e.target.value)}

                                            />
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type={"email"} className={'checkout-form-input'}
                                                          onChange={e => setEmail(e.target.value)}
                                            />
                                        </Form.Group>
                                    </Form.Row>

                                    <div>
                                        <Button className={"button-2 mx-auto mb-5"} type={"submit"}>Proceed To Checkout</Button>
                                    </div>
                                </Form>
                            </Container>
                        </div>
                    </div>
           </>

    )
}

export default Cart;

