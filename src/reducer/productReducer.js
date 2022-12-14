const ProductReducer = (state, action) => {

  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "SET_API_DATA":
      const featuredData = action.payload.filter((curElem) => {
        return curElem.attributes.field_featured === true;
      });

      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featuredProducts: featuredData,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  };

};


export default ProductReducer;