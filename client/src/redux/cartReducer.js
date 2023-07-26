/* SELECTORS */
  export const getAllCartProducts = ({cart, products}) => cart.cartProducts.map(cartProduct => ({...cartProduct, product: 
  products.data.find(product => product.id === cartProduct.productId) }))

  export const getTotal = ({ cart }) => cart.cartTotalPrice;

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
    cartProducts: [],
    cartTotalPrice: [],
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
            ...statePart, cartProducts: [...statePart.cartProducts], cartTotalPrice: action.payload.cartTotalPrice
          };
        }
      default:
        return statePart;
    }
  }

  export default cartReducer;

  //...statePart, cartProducts: [...statePart.cartProducts], cartTotalPrice: action.payload.cartTotalPrice JEST OK ALE NIE WIEM JAK Z KOMENTARZEM BĘDZIE
//  ...statePart, cartProducts: [...statePart.cartProducts], cartTotalPrice: action.payload też jest okej, wówczas jest to tablica - tak najlepiej chyba
  

