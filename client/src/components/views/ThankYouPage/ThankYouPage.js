import {Col, Row} from 'react-bootstrap';

const ThankYouPage = () => {
    return (
      <Row className='d-flex justify-content-center'>
        <Col lg={12} className='d-flex justify-content-center'><h1>Zamówienie przyjęte</h1></Col>
        <Col lg={12} className='d-flex justify-content-center'><p className='text-center'>Dziękujemy za złożenie zamówienia w naszym sklepie! Zamówienie zostało przekazane do realizacji.</p></Col>
      </Row>
    );
  };
  
    export default ThankYouPage;