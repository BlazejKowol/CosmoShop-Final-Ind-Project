import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadProductsRequest } from "./redux/productsReducer";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./components/views/Home/Home";
import Cart from "./components/views/Cart/Cart";
import NotFound from "./components/views/NotFound/NotFound";
import Copyright from "./components/layout/Copyright/Copyright";

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
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes> 
      <Footer />
    </>
  )
}

export default App;


// <Route path="*" element={<NotFound />} />