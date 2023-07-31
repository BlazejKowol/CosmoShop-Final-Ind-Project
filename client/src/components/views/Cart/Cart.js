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
        dispatch(checkout({cartProducts: cartProducts, cartTotalPrice: cartTotalPrice, comment: comment}));
        navigate('/order');
    }

    if(cartProducts.length === 0) return (
    <div className={styles.container}>
        <h1 className={styles.header}>Koszyk jest pusty. Dodaj coś!</h1>
    </div>
    );

    return (
    <div className={styles.container}>
        <h1 className={styles.header}>Twój Koszyk</h1>
            <div className={styles.productList}>
                <Row className={styles.titles}>
                    <Col lg={6}>Produkt</Col>
                    <Col lg={2}>Cena jednostkowa</Col>
                    <Col lg={2}>Ilość</Col>
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
            <Row className="border-top text-center pt-2 align-items-center">
                <Col lg={6} className={styles.input}>
                    <Form.Control  
                        className="mb-3 w-75 align-items-center d-flex"
                        placeholder="Komentarz do zamówienia..."
                        value={comment} 
                        type="text" 
                        onChange={e => setComment(e.target.value)} 
                        />
                </Col>
                <Col lg={2} className="">
                    <span>Do zapłaty: </span>
                </Col>
                <Col lg={2} className="">
                    <span className={styles.price}>{cartTotalPrice} zł</span>
                </Col>
                <Col lg={2} className="pe-0">                
                    <button type="submit" className={styles.button}>
                        Przejdź dalej
                    </button>
                </Col>     
            </Row>
        </Form>
        
    </div>
    )
}

export default Cart;