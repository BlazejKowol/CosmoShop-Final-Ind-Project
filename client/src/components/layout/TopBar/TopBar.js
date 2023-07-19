import { Row, Col } from "react-bootstrap";

const TopBar = () => {

    return (
        <Row className="bg-info">

            <Col>
                <p>cosmo@cosmetics.pl</p>
                <p>+48567890123</p>
            </Col>

            <Col>
                <p className="text-center">Sprawdź naszą wyjątkową ofertę!</p>
            </Col>

            <Col className="text-end">
                <p>Darmowa dostawa!</p>
            </Col>

        </Row>
    )
}

export default TopBar;