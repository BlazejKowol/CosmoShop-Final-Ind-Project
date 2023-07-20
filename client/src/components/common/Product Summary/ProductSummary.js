import { NavLink } from 'react-router-dom';
import { Nav } from "react-bootstrap";
import { Col, Button } from "react-bootstrap";
import { IMGS_URL } from "../../../config";

const ProductSummary = ({id, mark, title, image1, price}) => {

  return (
        <>
            <Col key={id}>
                <div className={"border border-2 rounded py-2 px-2 mx-1 mb-2"}>  
                    <h3 className="h3">{mark}</h3>
                    <h4 className="h4">{title}</h4>
                    <div className='photoCover'>
                        <img className="photo" src={IMGS_URL + image1} alt="Product_photo" /> 
                    </div>
                    <h4 className="small"><b>Price </b>{price}</h4>     
                    <Nav.Link as={NavLink} className="text-decoration-none text-light px-1" to={"/product/" + id}>
                        <Button type="submit" className="border border-none bg-primary rounded py-1">Więcej</Button>
                    </Nav.Link>
                </div>
            </Col>
        </>
  );
  };
  
    export default ProductSummary;