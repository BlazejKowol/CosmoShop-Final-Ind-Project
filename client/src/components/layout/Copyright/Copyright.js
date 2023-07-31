import { Row, Col, Container } from "react-bootstrap";
import styles from './Copyright.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Copyright= () => {
    return (
      <Container>
        <Row className="align-items-center">
          <Col xs={12} lg={6} className={styles.copyright}>
              <p className={styles.text}>
                  ©Copyright 2023 CosmoShop | All Rights Reserved
              </p>
          </Col>

          <Col xs={12} lg={6} className={styles.icons}>
            <a href="#" className={styles.icon}><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#" className={styles.icon}><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" className={styles.icon}><FontAwesomeIcon icon={faTiktok} /></a>
            <a href="#" className={styles.icon}><FontAwesomeIcon icon={faYoutube} /></a>
          </Col>
        </Row>
      </Container>
    );
  };
  
    export default Copyright;