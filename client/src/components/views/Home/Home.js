import ProductsGrid from '../../common/ProductsGrid/ProductsGrid';
import { useSelector } from 'react-redux';
import { getProducts } from "../../../redux/productsReducer";
import Carousel from '../../layout/Carousel/Carousel';

const Home = () => {

  const products = useSelector(getProducts);

  return (
    <>
    <Carousel />
    <section>
        <div className="d-flex justify-content-center my-4">
            <h1 className="h2">Bestsellery</h1>
        </div>
        <ProductsGrid products={products} />
    </section>   
    </>
  );
};

  export default Home;