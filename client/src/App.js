import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadProductsRequest } from "./redux/productsReducer";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./components/views/Home/Home";

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProductsRequest())
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
        </Routes> 
      <Footer />
    </>
  )
}

export default App;


// <Route path="*" element={<NotFound />} />