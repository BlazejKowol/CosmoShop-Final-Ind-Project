import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getProductsById } from "../../../redux/productsReducer";
import { Col, Row } from "react-bootstrap";
import styles from './Product.module.scss';
import { IMGS_URL } from "../../../config";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faTruck, faArrowLeft } from '@fortawesome/fontawesome-free-solid';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../../redux/cartReducer";

const Product = () => {

    const {id} = useParams();
    const product = useSelector(state => getProductsById(state, id));
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [amount, setAmount] = useState(1);

    const incrementAmount = () => {
        if (amount < 10) {
          setAmount(amount + 1);
        }
      };
    
      const decrementAmount = () => {
        if (amount > 1) {
          setAmount(amount - 1);
        }
      };

      const handleAddToCart = e => {
        e.preventDefault();
        dispatch(addToCart({ id, productId: id, amount: amount}))
        navigate('/cart');
    };
  
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
                <Col lg={2} className={styles.col}>
                    <button onClick={decrementAmount} className={styles.buttonAmount}>-</button>
                      {amount}
                    <button onClick={incrementAmount} className={styles.buttonAmount}>+</button>
                </Col>
                <Col lg={9} className="p-0">
                    <button onClick={handleAddToCart} className={styles.button}>
                        Dodaj do koszyka
                    </button>
                </Col>
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