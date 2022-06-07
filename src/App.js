import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import MainRoutes from "./MainRoutes";
import AuthPage from "./Components/AuthPage/AuthPage";
import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoutes />
      <Footer />
    </div>
  );
};

export default App;
