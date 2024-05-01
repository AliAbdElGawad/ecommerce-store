import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { StoreProvider } from "./contexts/StoreContext";
import { CartProvider } from "./contexts/CartContext";
import "./index.css";

/**
 * TODO: auth0
 */

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Auth0Provider
    domain="dev-2vcohmheuzsqhdzp.us.auth0.com"
    clientId="abiy6aaefrFcbh8JlzqITOnUmuM2zv3b"
    redirectUri={window.location.origin}
  >
    <StoreProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </StoreProvider>
  </Auth0Provider>
  // </React.StrictMode>
);
