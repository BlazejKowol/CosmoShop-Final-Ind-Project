import { Row, Col } from "react-bootstrap";
import styles from './TopBar.module.scss';

const TopBar = () => {

    return (
        <div className={styles.main}>
        <Row>

            <Col xs={12} sm={3} className={styles.col}>
                <p className={styles.p}>Cosmo@cosmetics.pl</p>
            </Col>

            <Col xs={12} sm={3} className={styles.col}>
                <p className={styles.p1}>567890123</p>
            </Col>

            <Col xs={12} sm={3} className={styles.col}>
                <p className={styles.p2}>Sprawdź naszą wyjątkową ofertę!</p>
            </Col>

            <Col xs={12} sm={3} className={styles.col}>
                <p className={styles.p3}>Darmowa dostawa!</p>
            </Col>

        </Row>
        </div>
    )
}

export default TopBar;