import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import CategoriesPage from "../pages/CategoriesPage";
import FAQPage from "../pages/FAQPage";
import Contact from "../pages/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/products" element={<Products />} />

      <Route path="/categories" element={<CategoriesPage />} />

      <Route path="/faq" element={<FAQPage />} />

      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;