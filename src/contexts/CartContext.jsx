import { createContext, useContext, useEffect, useReducer } from "react";

const store = createContext();

const initialValue = {
  cart: [],
  totalPrice: 0,
  totalItems: 0,
};

const reducer = (state, action) => {
  // Actions //
  if (action.type === "ADD_TO_CART") {
    const newItem = action.payload;
    const tempCart = [...state.cart];
    let existingItemIndex = tempCart.findIndex((i) => i.id === newItem.id);
    if (existingItemIndex >= 0) {
      tempCart[existingItemIndex].quantity += newItem.quantity;
      tempCart[existingItemIndex].itemTotalPrice +=
        newItem.quantity * newItem.price;
      return { ...state, cart: [...tempCart] };
    } else {
      return {
        ...state,
        cart: [
          ...state.cart,
          { ...newItem, itemTotalPrice: newItem.price * newItem.quantity },
        ],
      };
    }
  }
  if (action.type === "CALC_TOTAL") {
    const { totalItems, totalPrice } = state.cart.reduce(
      (total, cartItems) => {
        const { quantity, price } = cartItems;
        total.totalItems += quantity;
        total.totalPrice += quantity * price;
        return total;
      },
      { totalPrice: 0, totalItems: 0 }
    );
    return { ...state, totalPrice, totalItems };
  }
  // Reset the Cart //
  if (action.type === "RESET_CART") {
    return { initialValue };
  }
  if (action.type === "UPDATE_LOCAL") {
    localStorage.setItem("items", JSON.stringify(state));
    return { ...state };
  }
  if (action.type === "GET_FROM_LOCAL") {
    const localData = JSON.parse(localStorage.getItem("items"));
    if (localData) {
      return { ...localData };
    }
  }
  // return State BY Default
  return state;
};

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };
  useEffect(() => {
    dispatch({ type: "GET_FROM_LOCAL" });
  }, []);
  useEffect(() => {
    dispatch({ type: "CALC_TOTAL" });
    dispatch({ type: "UPDATE_LOCAL" });
  }, [state.cart]);
  return (
    <store.Provider value={{ ...state, addToCart }}>{children}</store.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  return useContext(store);
};
