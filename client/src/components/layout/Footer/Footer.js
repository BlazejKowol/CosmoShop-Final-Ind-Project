import { Row, Col } from "react-bootstrap";

const Footer = () => {

    return (
        <Row className="bg-info">

            <Col>
                <h1>Informacje</h1>
                    <p>Informacje o sklepie</p>
                    <p>Informacje o sklepie</p>
                    <p>Informacje o sklepie</p>
                    <p>Informacje o sklepie</p>
            </Col>

            <Col>
                <h1 className="text-center">Zamówienia</h1>
                    <p>Informacje o sklepie</p>
                    <p>Informacje o sklepie</p>
                    <p>Informacje o sklepie</p>
                    <p>Informacje o sklepie</p>
            </Col>

            <Col className="text-end">
                <h1>Regulamin</h1>
                    <p>Informacje o sklepie</p>
                    <p>Informacje o sklepie</p>
                    <p>Informacje o sklepie</p>
                    <p>Informacje o sklepie</p>
            </Col>

        </Row>
    )
}

export default Footer;