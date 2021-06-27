import React from 'react';
import  {Container,Nav, Navbar} from "react-bootstrap";
import {useCart} from "react-use-cart";
import brandLogo from "../../public/aklogo.png"

const Navigation = () => {
    const { cartTotal } = useCart();


    return (
            <>
                <Navbar variant="dark" expand={"lg"} className={'font-weight-bold'}>
                    <Container fluid>
                    <Navbar.Brand href="/"><img src={brandLogo} alt=""/></Navbar.Brand>
                    <Navbar.Toggle aria-controls={"navbar-nav"}/>
                    <Navbar.Collapse id={"navbar-nav"}>
                        <Nav className="ml-auto">
                            <Nav.Link href="/beats">Beats</Nav.Link>
                            <Nav.Link href="/soundkits">Sound Kits</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                            <Nav.Link href="/cart">
                                <span>
                                    <i className={"fa fa-shopping-cart text-white"}/>
                                </span>
                                &nbsp; Cart: ${cartTotal? cartTotal : 0}
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>

            </>
        );
}

export default Navigation;