// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { StoreProvider } from "./contexts/StoreContext";
import { CartProvider } from "./contexts/CartContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <StoreProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </StoreProvider>
  // </React.StrictMode>
);
