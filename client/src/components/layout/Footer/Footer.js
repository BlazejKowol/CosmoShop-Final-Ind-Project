import { Row, Col } from "react-bootstrap";
import styles from './Footer.module.scss';
import Copyright from "../Copyright/Copyright";

const Footer = () => {

    return (
        <>
        <div className={styles.main}>
        <Row>
            
                <Col lg={4}>
                    <h1>Informacje</h1>
                        <p>Informacje o sklepie</p>
                        <p>Formy dostawy</p>
                        <p>Opcje płatności</p>
                        <p>Kody rabatowe</p>
                </Col>

                <Col lg={4}>
                    <h1>Zamówienia</h1>
                        <p>Status zamówienia</p>
                        <p>Reklamacje</p>
                        <p>Zwroty</p>
                        <p>Wymiana</p>
                </Col>

                <Col lg={4}>
                    <h1>Regulamin</h1>
                        <p>Zwroty, reklamacje</p>
                        <p>Regulamin</p>
                        <p>Regulamin newslettera</p>
                        <p>Odstąpienia od umowy</p>
                </Col>

            
            </Row>
        </div>
        <Copyright />
        </>
    )
}

export default Footer;