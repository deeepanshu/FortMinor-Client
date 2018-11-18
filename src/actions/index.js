import axios from "axios";
export const loadCategories = () => {
  return dispatch => {
    return axios.get("/api/populate/1").then(response => {
      console.log(response.data);
      dispatch(getAllCategories(response.data));
    });
  };
};
export const getAllCategories = categories => ({
  type: "GET_CATEGORIES",
  categories
});

export const addCategory = category => {
  return dispatch => {
    return axios
      .post("/api/add/category", category)
      .then(res => {
        console.log(res.data);
        dispatch(loadCategories());
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const loadSubCategories = id => {
  return dispatch => {
    return axios.get(`/api/populate/category/${id}`).then(response => {
      console.log(response.data);
      dispatch(getCategory(response.data));
    });
  };
};

export const getCategory = category => ({
  type: "GET_CATEGORY",
  category
});

export const addSubCategory = subcategory => {
  return dispatch => {
    return axios
      .post("/api/add/subcategory", subcategory)
      .then(res => {
        console.log(res.data);
        dispatch(loadSubCategories(subcategory.categoryID));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const loadProducts = id => {
  return dispatch => {
    return axios.get(`/api/populate/subcategory/${id}`).then(response => {
      console.log(response.data);
      dispatch(getProducts(response.data));
    });
  };
};

export const getProducts = subcategory => ({
  type: "GET_PRODUCTS",
  subcategory
});

export const addProduct = product => {
  return dispatch => {
    return axios
      .post("/api/add/product", product)
      .then(res => {
        console.log(res.data);
        dispatch(loadProducts(product.subCategoryID));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const loadProduct = id => {
  return dispatch => {
    return axios.get(`/api/populate/product/${id}`).then(response => {
      console.log(response.data);
      dispatch(getProduct(response.data));
    });
  };
};

export const getProduct = product => ({
  type: "GET_PRODUCT",
  product
});

export const loadCurrentUser = () => {
  return dispatch => {
    return axios.get(`/auth/current_user`).then(response => {
      console.log(response.data);
      dispatch(getCurrentUser(response.data));
    });
  };
};
export const getCurrentUser = user => ({
  type: "GET_CURRENT_USER",
  user
});
export const changePlacedFlag = data => ({
  type: "CHANGE_PLACED_FLAG",
  data
});
export const requestToOrder = productId => {
  return dispatch => {
    return axios
      .post("/api/add/request", productId)
      .then(res => {
        console.log(res.data);
        dispatch(changePlacedFlag(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
