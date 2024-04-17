import { createContext, useContext, useEffect, useReducer } from "react";
import { productsURL } from "../utils/constants";

// eslint-disable-next-line react-refresh/only-export-components
export const store = createContext();

const initialValue = {
  isSidebarOpen: false,
  isCartOpen: false,
  filteredProducts: [],
  products: [],
  productsState: { succeeded: null, loading: false, error: null },
  singleProduct: {},
  singleProductState: { succeeded: null, loading: false, error: null },
  sort: "default",
  filteres: {
    price: 0,
    search: "",
    category: "all",
  },
};

const reducer = (state, action) => {
  if (action.type === "TOGGLE_SIDEBAR") {
    return { ...state, isSidebarOpen: !state.isSidebarOpen };
  }
  if (action.type === "CLOSE_SIDEBAR") {
    return { ...state, isSidebarOpen: false };
  }
  if (action.type === "TOGGLE_CART") {
    return { ...state, isCartOpen: !state.isCartOpen };
  }
  if (action.type === "CLOSE_CART") {
    return { ...state, isCartOpen: false };
  }
  if (action.type === "LOADING") {
    return {
      ...state,
      productsState: { succeeded: null, loading: true, error: null },
    };
  }
  if (action.type === "LOADING_SINGLE") {
    return {
      ...state,
      singleProductState: { succeeded: null, loading: true, error: null },
    };
  }
  if (action.type === "GET_DATA") {
    let maxPrice = action.payload.map((p) => p.price);
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      products: [...action.payload],
      productsState: { succeeded: true, loading: false, error: null },
      filteredProducts: [...action.payload],
      filteres: { ...state.filteres, price: maxPrice, maxPrice },
    };
  }
  if (action.type === "FETCH_ONE_ITEM") {
    return {
      ...state,
      singleProduct: action.payload,
      singleProductState: { succeeded: true, loading: false, error: null },
    };
  }

  if (action.type === "UPDATE_SORT") {
    return { ...state, sort: action.payload };
  }

  if (action.type === "CHANGE_SORT") {
    let newSort = [...state.filteredProducts];
    const sort = state.sort;
    if (sort !== "default") {
      if (sort === "a-to-z") {
        newSort = newSort.sort((a, b) => a.title.localeCompare(b.title));
      } else if (sort === "z-to-a") {
        newSort = newSort.sort((a, b) => b.title.localeCompare(a.title));
      } else if (sort === "high-to-low") {
        newSort = newSort.sort((a, b) => a.price - b.price);
      } else if (sort === "low-to-high") {
        newSort = newSort.sort((a, b) => b.price - a.price);
      }
    } else {
      return { ...state, filteredProducts: newSort };
    }
    return { ...state, filteredProducts: newSort };
  }

  if (action.type === "UPDATE_FILTER") {
    const { name, value } = action.payload;
    return { ...state, filteres: { ...state.filteres, [name]: value } };
  }
  if (action.type === "RESIT_FILTERS") {
    return {
      ...state,
      sort: "default",
      filteres: {
        ...state.filteres,
        search: "",
        category: "all",
        price: state.filteres.maxPrice,
      },
    };
  }
  if (action.type === "FILTER_PRODUCTS") {
    let tempProducts = state.products;
    // Price
    tempProducts = tempProducts.filter((item) => {
      return item.price <= state.filteres.price;
    });
    // Category
    if (state.filteres.category !== "all") {
      tempProducts = tempProducts.filter((item) => {
        return item.category === state.filteres.category;
      });
    }
    // Search
    if (state.filteres.search !== "") {
      const searchText = state.filteres.search.toLowerCase();
      tempProducts = tempProducts.filter((item) => {
        return item.title.toLowerCase().includes(searchText);
      });
    }
    return { ...state, filteredProducts: tempProducts };
  }
  return state;
};

// eslint-disable-next-line react/prop-types
export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await fetch(`${productsURL}/products`);
      const data = await response.json();
      dispatch({ type: "GET_DATA", payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchSingleProduct = async (id) => {
    dispatch({ type: "LOADING_SINGLE" });
    try {
      const respo = await fetch(`${productsURL}${id}`);
      const data = await respo.json();
      dispatch({ type: "FETCH_ONE_ITEM", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "CHANGE_SORT" });
  }, [state.products, state.sort, state.filteres]);

  /**
   * * Actions
   */
  const toggleSideBar = () => {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };
  const closeSideBar = () => {
    dispatch({ type: "CLOSE_SIDEBAR" });
  };
  const toggleCart = () => {
    dispatch({ type: "TOGGLE_CART" });
  };
  const closeCart = () => {
    dispatch({ type: "CLOSE_CART" });
  };
  const filtersUpdate = (data) => {
    let { name, value } = data;
    if (name === "price") {
      value = Number(value);
    }
    // console.log(data);
    dispatch({ type: "UPDATE_FILTER", payload: { name, value } });
  };
  const sortUpate = (value) => {
    dispatch({ type: "UPDATE_SORT", payload: value });
  };
  const resitFilteres = () => {
    dispatch({ type: "RESIT_FILTERS" });
  };

  return (
    <store.Provider
      value={{
        ...state,
        toggleSideBar,
        closeSideBar,
        toggleCart,
        closeCart,
        filtersUpdate,
        sortUpate,
        fetchSingleProduct,
        resitFilteres,
      }}
    >
      {children}
    </store.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useStore = () => {
  return useContext(store);
};
