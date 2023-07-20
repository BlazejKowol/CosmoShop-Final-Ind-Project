import { Row, Col } from "react-bootstrap";
import styles from './TopBar.module.scss';

const TopBar = () => {

    return (
        <Row className={styles.main}>

            <Col className={styles.col}>
                <Row className={styles.row}>
                <Col className="col-5"><p className={styles.text}>cosmo@cosmetics.pl</p></Col>
                <Col className="col-5"><p className={styles.text}>567890123</p></Col>
                </Row>
            </Col>

            <Col className={styles.col}>
                <p className={styles.p2}>Sprawdź naszą wyjątkową ofertę!</p>
            </Col>

            <Col className={styles.col}>
                <p className={styles.p2}>Darmowa dostawa!</p>
            </Col>

        </Row>
    )
}

export default TopBar;