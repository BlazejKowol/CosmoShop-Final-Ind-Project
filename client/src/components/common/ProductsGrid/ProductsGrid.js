import ProductSummary from "../Product Summary/ProductSummary";
import { Col, Row } from "react-bootstrap";

const ProductsGrid = ({products}) => {

  if (products.length === 0) return 'No products to display'

  return (
    <Row>
      {products.map(prod =>
        <Col key={prod.id}>
            <ProductSummary {...prod} />
        </Col>
        )}
    </Row>
  );
};

  export default ProductsGrid;