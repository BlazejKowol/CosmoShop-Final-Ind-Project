/* SELECTORS */
export const getCart = ({ cart }) => cart.data;

// action name creator
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* ACTIONS */

const ADD_T0_CART = createActionName('ADD_T0_CART');
const UPDATE_CART = createActionName('UPDATE_CART');
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');
const CHECKOUT = createActionName('CHECKOUT');

export const addToCart = payload => ({ payload, type: ADD_T0_CART });
export const removeFromCart = payload => ({ payload, type: REMOVE_FROM_CART });
export const updateCart = payload => ({ payload, type: UPDATE_CART });
export const checkout = payload => ({ payload, type: CHECKOUT });

/* INITIAL STATE */
const initialState = {
    data: [],
  };

/* REDUCER */

  const cartReducer = (statePart = initialState, action = {}) => {
    switch (action.type) {
      case ADD_T0_CART: 
        return { ...statePart, data: [...action.payload] };
      default:
        return statePart;
    }
  }

  export default cartReducer;
  

