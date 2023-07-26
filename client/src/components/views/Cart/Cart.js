import { Row, Col } from "react-bootstrap";
import styles from './Cart.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { checkout, getAllCartProducts } from "../../../redux/cartReducer";
import CartProductBox from "../../common/CartProductBox/CartProductBox";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { useState } from "react";

const Cart = () => {

    const cartProducts = useSelector(getAllCartProducts);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [comment, setComment] = useState('');

    const cartTotalPrice = cartProducts.reduce((acc, item) => 
    acc + item.product.price * item.amount, 0);

    const proceedToCheckout = (e) => {
        e.preventDefault();
        dispatch(checkout({cartProducts: cartProducts, cartTotalPrice: cartTotalPrice, comment: setComment(e.target.value)})); // trzeba dodać totalCartPrice i comment
        navigate('/order');
    }

    //if(cartProducts.length === 0) return 'Cart is empty';

    return (
    <div className={styles.container}>
        <h1 className={styles.header}>Twój Koszyk</h1>
            <div className={styles.productList}>
                <Row className="text-center mb-2">
                    <div className="col-6">Produkt</div>
                    <div className="col-2">Cena jednostkowa</div>
                    <div className="col-2">Ilość</div>
                </Row>  

                {cartProducts.map(prod => 
                <CartProductBox
                    key={prod.id}
                    id={prod.id}
                    image={prod.product.image1}
                    title={prod.product.title}
                    mark={prod.product.mark}
                    price={prod.product.price}
                    amount={prod.amount}
                />
                )}
            </div>

        <Form onSubmit={proceedToCheckout}>
            <Row className="border-top text-center pt-2">
                <Col lg={9}>
                    <Form.Control  
                        className="mb-3 w-100"
                        placeholder="Komentarz do zamówienia..."
                        value={comment} 
                        type="text" 
                        onChange={e => setComment(e.target.value)} 
                        />
                </Col>
                <Col lg={3}>
                    Kwota zamówienia: {cartTotalPrice} zł
                    <button type="submit" className={styles.button}>
                        Przejdź do zamówienia
                    </button>
                </Col>     
            </Row>
        </Form>
        
    </div>
    )
}

export default Cart;

/// Zrobić z komentarza osbny komponent i przesłać go jako props?