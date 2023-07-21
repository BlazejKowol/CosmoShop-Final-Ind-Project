import { Row, Col } from "react-bootstrap";
import styles from './Copyright.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Copyright= () => {
    return (
      <Row className="align-items-center">
        <Col>
            <p className={styles.text}>
                ©Copyright 2023 CosmoShop | All Rights Reserved
            </p>
        </Col>

        <Col className="ps-5 ms-5">
           <a href="#" className={styles.icon}><FontAwesomeIcon icon={faFacebookF} /></a>
           <a href="#" className={styles.icon}><FontAwesomeIcon icon={faInstagram} /></a>
           <a href="#" className={styles.icon}><FontAwesomeIcon icon={faTiktok} /></a>
           <a href="#" className={styles.icon}><FontAwesomeIcon icon={faYoutube} /></a>
        </Col>
      </Row>
    );
  };
  
    export default Copyright;