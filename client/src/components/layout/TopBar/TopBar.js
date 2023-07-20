import { Row, Col } from "react-bootstrap";
import styles from './TopBar.module.scss';

const TopBar = () => {

    return (
        <div className={styles.main}>
        <Row >

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
                <p className={styles.p3}>Darmowa dostawa!</p>
            </Col>

        </Row>
        </div>
    )
}

export default TopBar;