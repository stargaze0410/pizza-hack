import { Route, Routes } from "react-router-dom";
import HomePage from "../src/Components/HomePage/HomePage";
import AuthPage from "../src/Components/AuthPage/AuthPage";
import ProductList from "../src/Components/Products/ProductsList";
import ProductsDetails from "../src/Components/Products/ProductsDetails";
import EditProduct from "./Components/Admin/EditProduct/EditProduct";
import Cart from "./Components/Cart/Cart";
import AddProduct from "./Components/Admin/AddProduct/AddProduct";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/productlist" element={<ProductList />} />
      <Route path="/details/:id" element={<ProductsDetails />} />
      <Route path="/edit/:id" element={<EditProduct />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default MainRoutes;
