import { Header, Landing, Sidebar } from "./components";
import { ProductsPage, About, SingleProductPage, CheckoutPage } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <main>
      <Router>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<SingleProductPage />} />
          <Route path="/Checkout" element={<CheckoutPage />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
