import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import MainRoutes from "./MainRoutes";
import AuthPage from "./Components/AuthPage/AuthPage";
import { BrowserRouter } from "react-router-dom";
import ProductContextProvider from "./context/ProductContext";
import CartContextProvider from "./context/CartContext";
import AuthContextProvider from "./context/AuthContext";
const App = () => {
  return (
    <div>
      <AuthContextProvider>
      <CartContextProvider>
      <ProductContextProvider>
      <Navbar />
      <MainRoutes />
      <Footer />
      </ProductContextProvider>
      </CartContextProvider>
      </AuthContextProvider>
    </div>
  );
};

export default App;
