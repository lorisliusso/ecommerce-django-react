import { configureStore } from '@reduxjs/toolkit'
import {composeWithDevTools} from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer } from './reducers/productReducer'
import { cartReducer } from "./reducers/cartReducer"

const store = configureStore({
  reducer: {

    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart:cartReducer,
    
  }
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
        JSON.parse(localStorage.getItem(cartItemsFromStorage)) : []

  const initialState = {
    cart: {cartItems: cartItemsFromStorage}
  }

export default store

// The thunk middleware was automatically added