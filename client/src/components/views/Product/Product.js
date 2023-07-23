import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getProductsById } from "../../../redux/productsReducer";
import { Col, Row, Nav } from "react-bootstrap";
import styles from './Product.module.scss';
import { IMGS_URL } from "../../../config";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faTruck, faArrowLeft } from '@fortawesome/fontawesome-free-solid'
import { NavLink } from "react-router-dom";

const Product = () => {

    const {id} = useParams();
    const product = useSelector(state => getProductsById(state, id));
  
    return (
      <div key={id} className={styles.container}>
        <Col lg={7} className={styles.one}>
            <Col lg={7}>
                <div className={styles.image}>
                    <img src={IMGS_URL + product.image1} alt="Product1_photo" />
                </div>
            </Col>
            <Col lg={7}>
                <div className={styles.image}>
                    <img src={IMGS_URL + product.image2} alt="Product2_photo" />
                </div> 
            </Col>
            <Col lg={7}>
                <div className={styles.image}>
                    <img src={IMGS_URL + product.image3} alt="Product3_photo" />
                </div> 
            </Col>
        </Col>

        <Col className={styles.productDetail} lg={5}>
            <div className={styles.basic}>
                <h2>{product.mark}</h2>
                <p className={styles.title}>{product.title}</p>
                <p className={styles.price}>{product.price} zł/szt.</p>
            </div>

            <Row className={styles.action}>
            <button>
                + -
            </button>
            <Nav.Link as={NavLink} to={"/cart"}>
            <button className={styles.button} type="submit">Dodaj do koszyka</button>
            </Nav.Link>
            </Row>

            <div className={styles.text}>
                <Col className={styles.column}>
                    <FontAwesomeIcon className={styles.icon} icon={faCircle} style={{color: "#42d78a",}} />
                    <p>Wysyłka w następny dzień roboczy</p>
                </Col>
                <Col className={styles.column}>
                    <FontAwesomeIcon className={styles.icon} icon={faTruck} style={{color: "#2f3542",}} />
                    <p>Darmowa dostawa</p>
                </Col>
                <Col className={styles.column}>
                    <FontAwesomeIcon className={styles.icon} icon={faArrowLeft} />
                    <p>Aż 30 dni na zwrot</p>
                </Col>
                <p className={styles.description}>Opis</p>
                <p>{product.description}</p>
            </div>
        </Col>

      </div>
      );
    };
    
      export default Product;