import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import productsReducer from './productsReducer';
import cartReducer from './cartReducer';
import ordersReducer from './ordersReducer';

const subreducers = {
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
}

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,

  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

export default store;