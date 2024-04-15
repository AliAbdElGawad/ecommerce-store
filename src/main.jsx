// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import { Auth0Provider } from "@auth0/auth0-react";
import { StoreProvider } from "./contexts/StoreContext";
import { CartProvider } from "./contexts/CartContext";
import "./index.css";

/**
 * TODO: auth0
 */

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  // <Auth0Provider
  //   domain={process.env.REACT_APP_AUTH0_DOMAIN}
  //   clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
  //   redirectUri={window.location.origin + "/callback"}
  // >
  <StoreProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </StoreProvider>
  // {/* </Auth0Provider> */}
  // </React.StrictMode>
);
