
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import productsReducer from '../redux/products/products'
import categoryReducer from '../redux/categories/categories'
import cartReducer from '../redux/cart/cart'
import orderReducer from '../redux/orders/orders'
import authReducer from '../redux/auth/auth'
const store = configureStore({
    reducer: {
        products : productsReducer,
        categorys : categoryReducer,
        cart : cartReducer,
        order : orderReducer,
        auth : authReducer
    },
    middleware : getDefaultMiddleware({
        serializableCheck: false
    }),
    devTools: true
})

export default store