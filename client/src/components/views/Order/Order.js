import { Row, Col } from "react-bootstrap";
import styles from './Order.module.scss';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getAllCartProducts, getTotal } from "../../../redux/cartReducer";

const Order = () => {
  
    const { register, handleSubmit: validate, formState: { errors } } = useForm();

    const cartProducts = useSelector(getAllCartProducts);
    console.log('koszyk in Order', cartProducts);

    const total = useSelector(getTotal)
    console.log('total', total);

    const handleSubmit = () => {    }

    return (
    <div className={styles.container}>

        <Form className={styles.form} onSubmit={validate(handleSubmit)}>

            <Col className={styles.formCol} lg={8}>
                <h3>Dane Kontaktowe</h3>
                
                <Row>
                    <Col lg={4}>
                        <Form.Label>Imię*</Form.Label>
                        <Form.Control 
                        {...register("name", { required: true, minLength: 3, maxLength: 25 })} 
                        className="mb-3 w-100" 
                        value={""} 
                        type="text" 
                        //onChange={e => setName(e.target.value)} 
                        />
                        {errors.name && <small className="d-block form-text text-danger mt-2">Uzupełnij swoje imię</small>}
                    </Col>

                    <Col lg={8}>
                        <Form.Label>Nazwisko*</Form.Label>
                        <Form.Control 
                        {...register("surname", { required: true, minLength: 3, maxLength: 40 })} 
                        className="mb-3 w-75" 
                        value={""}  
                        type="text" 
                        //onChange={e => setSurname(e.target.value)} 
                        />
                        {errors.surname && <small className="d-block form-text text-danger mt-2">Uzupełnij swoje nazwisko</small>}
                    </Col>
                </Row>
                
                <Form.Label>Adres*</Form.Label>
                <Form.Control 
                {...register("address", { required: true, minLength: 3, maxLength: 50 })} 
                className={styles.address} 
                value={""} 
                type="text" 
                //onChange={e => setAddress(e.target.value)} 
                />
                {errors.address && <small className="d-block form-text text-danger mt-2">Uzupełnij swój adres</small>}


                <Row>
                    <Col lg={4}>
                        <Form.Label>Kod pocztowy*</Form.Label>
                        <Form.Control 
                        {...register("code", { required: true, minLength: 3, maxLength: 8 })} 
                        className="mb-3 w-100" 
                        value={""} 
                        type="text" 
                        //onChange={e => setCode(e.target.value)} 
                        />
                        {errors.code && <small className="d-block form-text text-danger mt-2">Uzupełnij kod pocztowy</small>}
                    </Col>

                    <Col lg={8}>
                        <Form.Label>Miasto*</Form.Label>
                        <Form.Control 
                        {...register("city", { required: true, minLength: 2, maxLength: 50 })} 
                        className="mb-3 w-75" 
                        value={""} 
                        type="text" 
                        //onChange={e => setCity(e.target.value)} 
                        />
                        {errors.city && <small className="d-block form-text text-danger mt-2">Uzupełnij miasto</small>}    
                    </Col>
                </Row>
            </Col>

            <Col lg={4}>
                <h3>Podsumowanie</h3>
                <Col className={styles.summary} lg={12}>
                    <Row> 
                        <Col lg={3}>
                            zdjęcie mapowanie!
                        </Col>
                        <Col lg={6}>
                            nazwa produktu
                        </Col>
                        <Col lg={3}>
                            cena produktu
                        </Col>
                    </Row>
                </Col>

                <Col lg={12}>
                    <Row>
                        <Col lg={6}>
                            Suma
                        </Col>
                        <Col lg={6}>
                        {total} zł 
                        </Col>
                    </Row>
                </Col>

                <button type="submit" className="border border-none bg-primary rounded py-1 mt-1">
                <p className="text-light m-0">Złóż zamówienie</p>
                
                </button>
            </Col>

        </Form>

    </div>
    )
}

export default Order;