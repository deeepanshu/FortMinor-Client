const categoryReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_CATEGORIES":
      console.log(state, action);
      return {
        ...state,
        category: action.categories,
        loading: false
      };
    case "GET_CATEGORY":
      console.log(state, action);
      return {
        ...state,
        categorySpecefic: action.category,
        loading: false
      };
    case "GET_PRODUCTS":
      console.log(state, action);
      return {
        ...state,
        loading: false,
        subCategorySpecefic: action.subcategory
      };
    case "GET_PRODUCT":
      console.log(state, action);
      return {
        ...state,
        loading: false,
        product: action.product
      };
    case "CHANGE_PLACED_FLAG":
      return {
        ...state,
        placed: true,
        request: action.data
      };
    case "GET_REQUESTS_FOR_CURR_SUPPLIER":
      return {
        requests: action.requests
      };
    case "GET_REQUESTS_FOR_CUSTOMER":
      return {
        requests: action.requests
      };
    default:
      // need this for default case
      return state;
  }
};

export default categoryReducer;
