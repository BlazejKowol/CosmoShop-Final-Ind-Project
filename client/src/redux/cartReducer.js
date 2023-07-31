/* SELECTORS */
  export const getAllCartProducts = ({cart, products}) => cart.cartProducts.map(cartProduct => ({...cartProduct, product: 
  products.data.find(product => product.id === cartProduct.productId) }))

  export const getTotalPrice = ({ cart }) => cart.cartTotalPrice;
  export const getComment = ({ cart }) => cart.comment;

// action name creator
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* ACTIONS */

const ADD_T0_CART = createActionName('ADD_T0_CART');
const UPDATE_CART = createActionName('UPDATE_CART');
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');
const CHECKOUT = createActionName('CHECKOUT');
const CLEAR_CART = createActionName('CLEAR_CART');

export const addToCart = payload => ({ payload, type: ADD_T0_CART });
export const removeFromCart = payload => ({ payload, type: REMOVE_FROM_CART });
export const updateCart = payload => ({ payload, type: UPDATE_CART });
export const checkout = payload => ({ payload, type: CHECKOUT });
export const clearCart = payload => ({payload, type: CLEAR_CART})

/* INITIAL STATE */
const initialState = {
    cartProducts: [],
    cartTotalPrice: [],
    comment: '',
  };

/* REDUCER */

  const cartReducer = (statePart = initialState, action = {}) => {
    switch (action.type) {
      case ADD_T0_CART:
        if(statePart.cartProducts.find(product => product.id === action.payload.id)) {
          return { ...statePart, cartProducts: statePart.cartProducts.map(product => 
            product.id === action.payload.id
            ? {...product, amount: product.amount + action.payload.amount}
            : product) };
        } else {
          return {...statePart, cartProducts: [...statePart.cartProducts, {...action.payload}]};
        }
        case REMOVE_FROM_CART: {
          return {
            ...statePart,
            cartProducts: statePart.cartProducts.filter(product => 
              product.id !== action.payload),
          };
        }
        case UPDATE_CART: {
          return {
            ...statePart,
            cartProducts: statePart.cartProducts.map(product =>
              product.id === action.payload.id
                ? {
                    ...product,
                    ...action.payload,
                  }
                : product
            ),
          };
        }
        case CHECKOUT: {
          return {
            ...statePart, cartProducts: [...statePart.cartProducts], 
            cartTotalPrice: action.payload.cartTotalPrice,
            comment: action.payload.comment,
          };
        }
        case CLEAR_CART: {
          return initialState;
        }
      default:
        return statePart;
    }
  }

  export default cartReducer;
  

