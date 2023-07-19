import axios from 'axios';
import { API_URL } from '../config';

/* SELECTORS */
export const getProducts = ({ products }) => products.data;

// action name creator
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* ACTIONS */

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');

export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });

export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });

/* THUNKS */

export const loadProductsRequest = () => {
    return async dispatch => {
  
      dispatch(startRequest());
      try {
  
        let res = await axios.get(`${API_URL}/${reducerName}`);
        dispatch(loadProducts(res.data));
        dispatch(endRequest());
  
      } catch(e) {
        dispatch(errorRequest(e.message));
      }
  
    };
  };

  /* INITIAL STATE */

  const initialState = {
    data: [],
    request: {
      pending: false,
      error: null,
      success: null,
    },
  };

  /* REDUCER */

    const productsReducer = (statePart = initialState, action = {}) => {
    switch (action.type) {
      case LOAD_PRODUCTS: 
        return { ...statePart, data: [...action.payload] };
      case START_REQUEST:
        return { ...statePart, request: { pending: true, error: null, success: false } };
      case END_REQUEST:
        return { ...statePart, request: { pending: false, error: null, success: true } };
      case ERROR_REQUEST:
        return { ...statePart, request: { pending: false, error: action.error, success: false } };
      default:
        return statePart;
    }
  }

  export default productsReducer;
  