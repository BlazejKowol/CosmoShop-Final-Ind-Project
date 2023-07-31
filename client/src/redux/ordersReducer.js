import axios from 'axios';
import { API_URL } from '../config';
import { clearCart } from './cartReducer';

/* SELECTORS */
export const getOrders= ({ data }) => data.orders;

// action name creator
const reducerName = 'orders';
const createActionName = name => `app/${reducerName}/${name}`;

/* ACTIONS */

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

const PURCHASE = createActionName('PURCHASE');

export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });

export const purchase = payload => ({ payload, type: PURCHASE });

/* THUNKS */

export const purchaseRequest = (order) => {
    return async dispatch => {
  
      dispatch(startRequest());
      try {
  
        let res = await axios.post(`${API_URL}/${reducerName}`, order);
        dispatch(purchase(res));
        dispatch(endRequest());
  
      } catch(e) {
        dispatch(errorRequest(e.message));
      }
  
    };
  };

  /* INITIAL STATE */

  const initialState = {
    orders: [],
    request: {
      pending: false,
      error: null,
      success: null,
    },
  };

  /* REDUCER */

const ordersReducer = (statePart = initialState, action = {}) => {
    switch (action.type) {
      case PURCHASE: 
        return { ...statePart, orders: [...statePart.orders, action.payload] }
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

  export default ordersReducer;
