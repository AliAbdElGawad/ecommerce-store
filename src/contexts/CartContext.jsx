import { createContext, useContext, useEffect, useReducer } from "react";

const store = createContext();

const initialValue = {
  cart: [],
  totalPrice: 0,
  totalItems: 0,
};

const reducer = (state, action) => {
  // { Actions }

  // Add ITEMS to Cart
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
  // Calculation of the Total Price and Items in Cart
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
  // Loaclstorage control
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
  // Change amount of an Item in the Shopping Cart
  if (action.type === "TOGGLE_CART_ITEM_AMOUNT") {
    const { value, id } = action.payload;
    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        if (value === "inc") {
          let newAmount = item.amount + 1;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          return { ...item, amount: newAmount };
        }
        if (value === "dec") {
          let newAmount = item.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
          return { ...item, amount: newAmount };
        }
      }
      return item;
    });
    return { ...state, cart: tempCart };
  }
  // Remove item form cart
  if (action.type === "REMOVE_FROM_CART") {
    const filteredItems = state.cart.filter((i) => i.id !== action.payload);
    return { ...state, cart: filteredItems };
  }
  // Reset the Cart //
  if (action.type === "RESET_CART") {
    return { initialValue };
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
  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };
  const clearCart = () => {
    dispatch({ type: "RESET_CART" });
  };
  const updateItemInCart = (value, id) => {
    dispatch({ type: "TOGGLE_CART_ITEM_AMOUNT", payload: { value, id } });
  };
  useEffect(() => {
    dispatch({ type: "GET_FROM_LOCAL" });
  }, []);
  useEffect(() => {
    dispatch({ type: "UPDATE_LOCAL" });
    dispatch({ type: "CALC_TOTAL" });
  }, [state.cart]);
  return (
    <store.Provider
      value={{
        ...state,
        addToCart,
        clearCart,
        removeFromCart,
        updateItemInCart,
      }}
    >
      {children}
    </store.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  return useContext(store);
};
