import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { Navbar, Col } from 'react-bootstrap';
import styles from './NavBar.module.scss';

const NavBar = () => {

    return (
        <>
        <Navbar collapseOnSelect expand="lg" className={styles.navbar}>

                <Col className={styles.logo}><Nav.Link as={NavLink} to={"/"}>
                    Cosmo
                    <p className={styles.smallLogo}>Shop</p>
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