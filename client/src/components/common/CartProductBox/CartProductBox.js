import { Row } from "react-bootstrap";
import styles from "./CartProductBox.module.scss";
import { IMGS_URL } from "../../../config";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { removeFromCart } from "../../../redux/cartReducer";
import { updateCart } from "../../../redux/cartReducer";

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
                <Row key={id} className="border-top text-center pt-2">
                    <div className="col-3">
                        <img alt={title} src={IMGS_URL + image} />
                    </div>
                    <div className="col-3">{mark} {title}</div>
                    <div className="col-2">{price} zł</div>
                    <div className="col-2">
                        <button onClick={decrementAmount} className={styles.buttonAmount}>-</button>
                            {amount}
                        <button onClick={incrementAmount} className={styles.buttonAmount}>+</button>
                    </div>
                    <div className="col-2">
                        <button onClick={removeCart} className={styles.button}>Remove</button>
                    </div>
                </Row>
    )
}

export default CartProductBox