import { NavLink } from 'react-router-dom';
import { Nav, Col } from "react-bootstrap";
import { IMGS_URL } from "../../../config";
import styles from './ProductSummary.module.scss';

const ProductSummary = ({id, mark, title, image1, price}) => {

  return (
    <Col key={id}>
    <div className={styles.root}>

      <div className={styles.photo}>
        <Nav.Link as={NavLink} to={"/product/" + id}>
          <div className={styles.image}>
            <img src={IMGS_URL + image1} alt="Product_photo" /> 
          </div>
        </Nav.Link>
      </div>

      <div className={styles.content}>
        <h4>{mark}</h4>
        <Nav.Link as={NavLink} to={"/product/" + id}>
          <h5>{title}</h5>
        </Nav.Link>
      </div>
      
      <div className={styles.line}></div>

      <div className={styles.actions}>
        <div className={styles.price}>
          <h3>{price} zł</h3>
        </div>
        <Nav.Link as={NavLink} to={"/product/" + id}>
            <button className={styles.button} type="submit">Więcej</button>
        </Nav.Link>
      </div>

    </div>
    </Col>
  );
};
  
    export default ProductSummary;