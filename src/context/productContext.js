import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/productReducer';

const AppContext = createContext();

const API = 'https://drupaldecoupled.ddev.site/jsonapi/node/products';

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featuredProducts: [],
  singleProduct: {},
};


const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  // fetch all Products
  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });

    try {
      const res = await axios.get(url);
      const products = await res.data.data;
      // console.log(products);
      dispatch({
        type: "SET_API_DATA",
        payload: products
      });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }


  };

  // fetch single product

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });

    try {
      const res = await axios.get(url);
      const singleProduct = await res.data.data;
      dispatch({
        type: "SET_SINGLE_PROD",
        payload: singleProduct
      });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider >
  );
};

// custom hooks

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };