import ProductSummary from "../ProductSummary/ProductSummary";
import { Col, Row } from "react-bootstrap";
import styles from './ProductsGrid.module.scss';

const ProductsGrid = ({products}) => {

  if (products.length === 0) return 'No products to display'

  return (
    <div className={styles.grid}>
    <Row>
      {products.map(prod =>
        <Col md={3} sm={6} xs={12} key={prod.id}>
            <ProductSummary {...prod} />
        </Col>
        )}
    </Row>
    </div>
  );
};

  export default ProductsGrid;