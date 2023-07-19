import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadProductsRequest } from "./redux/productsReducer";
import NavBar from "./components/layout/NavBar/NavBar";
import Footer from "./components/layout/Footer/Footer";

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProductsRequest())
  }, [dispatch]);

  return (
    <Container>
      <NavBar />
      <Footer />
    </Container>
  )
}

export default App;
