import { Row, Col } from "react-bootstrap";
import styles from "./CartProductBox.module.scss";
import { IMGS_URL } from "../../../config";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { removeFromCart } from "../../../redux/cartReducer";
import { updateCart } from "../../../redux/cartReducer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const CartProductBox = ({id, image, title, mark, price, amount }) => {

    const dispatch = useDispatch();
    const [itemAmount, setAmount] = useState(amount);

    const incrementAmount = () => {
        if (itemAmount < 10) {
          setAmount(itemAmount + 1);
          dispatch(updateCart({id, amount: itemAmount + 1}))
        }
      };
    
      const decrementAmount = () => {
        if (itemAmount > 1) {
          setAmount(itemAmount - 1);
          dispatch(updateCart({id, amount: itemAmount - 1}))
        }
      };

      const removeCart = (e) => {
        e.preventDefault()
        dispatch(removeFromCart(id))
      }

    return (
                <Row key={id} className={styles.productBox}>
                    <Col lg={3}>
                      <div className={styles.image}>
                        <img alt={title} src={IMGS_URL + image} />
                      </div>
                    </Col>
                    <Col lg={3} className={styles.title}>
                      <span className={styles.mark}>{mark}</span>
                      <span><br/>{title}</span>
                    </Col>
                    <Col lg={2}>
                      {price} zł
                    </Col>
                    <Col lg={2}>
                        <button onClick={decrementAmount} className={styles.buttonAmount}>-</button>
                            {amount}
                        <button onClick={incrementAmount} className={styles.buttonAmount}>+</button>
                    </Col>
                    <Col lg={2}>
                        <button onClick={removeCart} className={styles.buttonMark}>
                          <FontAwesomeIcon icon={faXmark} style={{color: "#cd2b0e"}} />
                        </button>
                    </Col>
                </Row>
    )
}

export default CartProductBox