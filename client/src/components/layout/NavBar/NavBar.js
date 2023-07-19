import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { Navbar, Col, Container } from 'react-bootstrap';
import TopBar from '../TopBar/TopBar';

const NavBar = () => {

    return (
        <>
        <TopBar />
        <Navbar 
            bg="white" 
            collapseOnSelect
            expand="lg"
            className="mt-4 mb-4 rounded">

            <Container xs={12}>
                <Col><Nav.Link as={NavLink} to={"/"} className="text-info text-center h6 m-0">
                    Cosmo Shop
                </Nav.Link>
                </Col>

                <Nav className="me-auto justify-content-end">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav.Link as={NavLink} to="/cart">Add To Cart</Nav.Link>
                    </Navbar.Collapse>
                </Nav>
                
            </Container>  
        </Navbar>
        </>
    )
}

export default NavBar;