import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { Navbar, Col } from 'react-bootstrap';

const NavBar = () => {

    return (
        <>
        <Navbar 
            bg="white" 
            collapseOnSelect
            expand="lg"
            className="mt-4 mb-4 rounded">

                <Col><Nav.Link as={NavLink} to={"/"} className="text-info text-center h6 m-0">
                    Cosmo Shop
                </Nav.Link>
                </Col>

                <Nav className="me-auto justify-content-end">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav.Link as={NavLink} to="/cart">Cart</Nav.Link>
                    </Navbar.Collapse>
                </Nav>

        </Navbar>
        </>
    )
}

export default NavBar;