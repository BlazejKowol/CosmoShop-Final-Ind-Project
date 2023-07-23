import { Row, Col } from "react-bootstrap";
import styles from './Cart.module.scss';

const Cart = () => {

    //if(cart.length === 0) return 'Cart is empty';

    return (
    <div className={styles.container}>
        <h1 className={styles.header}>Twój Koszyk</h1>
            <div className={styles.productList}>
                <Row className="text-center mb-2">
                    <div className="col-6">Produkt</div>
                    <div className="col-2">Cena</div>
                    <div className="col-2">Ilość</div>
                </Row>  

                <Row className="border-top text-center pt-2">
                    <div className="col-3">tu będzie mapowane zdjęcie</div>
                    <div className="col-3">tu będzie mapowany produkt</div>
                    <div className="col-2">tu będzie cena produkt</div>
                    <div className="col-2">
                    <button className={styles.buttonAmount}>-</button>
                      tu będzie mapowany amount z koszyka
                    <button className={styles.buttonAmount}>+</button>
                    </div>
                    <div className="col-2">
                        <button className={styles.button} type="submit">Remove</button>
                    </div>
                </Row>

            </div>

        <Row className="border-top text-center pt-2">
            <Col lg={9}>
                Tu musi by form z komentarzem, który musi być dodany do zamówienia?
            </Col>
            <Col lg={3}>
                Tu musi być ostateczna cena za wszystkie produkty
                <button className={styles.button} type="submit">Przejdź do zamówienia - update Cart chyba?</button>
            </Col>
        </Row>
    </div>
    )
}

export default Cart;