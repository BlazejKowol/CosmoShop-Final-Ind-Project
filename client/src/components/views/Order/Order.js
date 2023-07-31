import { Row, Col } from "react-bootstrap";
import styles from './Order.module.scss';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useSelector } from "react-redux";
import { clearCart, getAllCartProducts, getComment, getTotalPrice } from "../../../redux/cartReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { purchaseRequest } from "../../../redux/ordersReducer";
import { IMGS_URL } from "../../../config";
import { v4 as uuidv4 } from 'uuid';

const Order = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [address, setAddress] = useState('');
    const [code, setCode] = useState('');
    const [city, setCity] = useState('');
  
    const { register, handleSubmit: validate, formState: { errors } } = useForm();

    const cartProducts = useSelector(getAllCartProducts);
    const totalPrice = useSelector(getTotalPrice)
    const comment = useSelector(getComment)

    const handleSubmit = () => {
        dispatch(purchaseRequest({
            products: cartProducts,
            //productId: cartProducts.map(prod => prod.productId),
            totalPrice: totalPrice, 
            comment: comment,
            client: {id: uuidv4(), email: email, name: name, surname: surname, address: address, code: code, city: city},
            id: uuidv4(),
        }));
        dispatch(clearCart())
        navigate("/thank-you-page");
        }

    return (
    <div className={styles.container}>

        <Form className={styles.form} onSubmit={validate(handleSubmit)}>

            <Col className={styles.formCol} lg={7}>
                <h3>Dane Kontaktowe</h3>
                
                <Row>
                    <Col lg={12}>
                        <Form.Label>e-mail*</Form.Label>
                        <Form.Control 
                        {...register("email", { required: true, minLength: 3, maxLength: 50 })}  
                        className={styles.input} 
                        value={email} 
                        type="text" 
                        onChange={e => setEmail(e.target.value)} 
                        />
                        {errors.email && <small className="d-block form-text text-danger mt-2">Uzupełnij swój adres e-mail</small>}
                    </Col>

                    <Col lg={4}>
                        <Form.Label>Imię*</Form.Label>
                        <Form.Control 
                        {...register("name", { required: true, minLength: 3, maxLength: 25 })} 
                        className={styles.inputShort} 
                        value={name} 
                        type="text" 
                        onChange={e => setName(e.target.value)} 
                        />
                        {errors.name && <small className="d-block form-text text-danger mt-2">Uzupełnij swoje imię</small>}
                    </Col>

                    <Col lg={8}>
                        <Form.Label>Nazwisko*</Form.Label>
                        <Form.Control 
                        {...register("surname", { required: true, minLength: 3, maxLength: 40 })} 
                        className={styles.inputLong} 
                        value={surname}  
                        type="text" 
                        onChange={e => setSurname(e.target.value)} 
                        />
                        {errors.surname && <small className="d-block form-text text-danger mt-2">Uzupełnij swoje nazwisko</small>}
                    </Col>
                </Row>
                
                <Form.Label>Adres*</Form.Label>
                <Form.Control 
                {...register("address", { required: true, minLength: 3, maxLength: 50 })} 
                className={styles.input} 
                value={address} 
                type="text" 
                onChange={e => setAddress(e.target.value)} 
                />
                {errors.address && <small className="d-block form-text text-danger mt-2">Uzupełnij swój adres</small>}


                <Row>
                    <Col lg={4}>
                        <Form.Label>Kod pocztowy*</Form.Label>
                        <Form.Control 
                        {...register("code", { required: true, minLength: 3, maxLength: 8 })} 
                        className={styles.inputShort} 
                        value={code} 
                        type="text" 
                        onChange={e => setCode(e.target.value)} 
                        />
                        {errors.code && <small className="d-block form-text text-danger mt-2">Uzupełnij kod pocztowy</small>}
                    </Col>

                    <Col lg={8}>
                        <Form.Label>Miasto*</Form.Label>
                        <Form.Control 
                        {...register("city", { required: true, minLength: 2, maxLength: 50 })} 
                        className={styles.inputLong} 
                        value={city} 
                        type="text" 
                        onChange={e => setCity(e.target.value)} 
                        />
                        {errors.city && <small className="d-block form-text text-danger mt-2">Uzupełnij miasto</small>}    
                    </Col>
                </Row>
            </Col>

            <Col lg={5}>
                <h3>Podsumowanie</h3>
                {cartProducts.map(prod => 
                <Col key={prod.id} className={styles.summary} lg={12}>
                    <Row className={styles.summaryCol}> 
                        <Col lg={3}>
                            <div className={styles.image}>
                                <img alt={prod.product.title} src={IMGS_URL + prod.product.image1} />
                            </div>
                        </Col>
                        <Col className={styles.title} lg={5}>
                        <span className={styles.mark}>{prod.product.mark}</span>
                            <br/>{prod.product.title}
                        </Col>
                        <Col lg={2}>
                            {prod.amount}
                        </Col>
                        <Col lg={2}>
                            {prod.product.price * prod.amount} zł
                        </Col>
                    </Row>
                </Col>
                )}

                {comment &&(<Row className={styles.comment}>
                    <Col>
                        Komentarz do zamówienia:
                    </Col>
                    <Col>
                        {comment}
                    </Col>
                </Row>)}

                <Col lg={12}>
                    <Row className={styles.totalAmount}>
                        <Col className={styles.infoPrice} lg={6}>
                            Kwota zamówienia: 
                        </Col>
                        <Col className={styles.total} lg={6}>
                        {totalPrice} zł 
                        </Col>
                    </Row>
                </Col>

                <button type="submit" className={styles.button}>
                    Złóż zamówienie
                </button>
            </Col>

        </Form>

    </div>
    )
}

export default Order;