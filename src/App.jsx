import { Header, Sidebar, Footer /* Profile*/ } from "./components";
import {
  ProductsPage,
  About,
  SingleProductPage,
  CheckoutPage,
  LandingPage,
  ErrorPage,
} from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  /**
   * TODO: add Profile page
   */
  return (
    <main>
      <Router>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<SingleProductPage />} />
          <Route path="/Checkout" element={<CheckoutPage />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
};

export default App;
