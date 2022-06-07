import { Route, Routes } from "react-router-dom";
import HomePage from "../src/Components/HomePage/HomePage";
import AuthPage from "../src/Components/AuthPage/AuthPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
};

export default MainRoutes;
