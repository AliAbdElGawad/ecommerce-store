import { Header, Sidebar, Footer } from "./components";
import {
  ProductsPage,
  About,
  SingleProductPage,
  CheckoutPage,
  LandingPage,
} from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <main>
      <Router>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<SingleProductPage />} />
          <Route path="/Checkout" element={<CheckoutPage />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
};

export default App;
