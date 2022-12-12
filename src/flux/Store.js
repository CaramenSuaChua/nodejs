import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import productsReducer from '../redux/products/products'

const storeD = configureStore({
    reducer: {
        products : productsReducer
    },
    middleware : getDefaultMiddleware({
        serializableCheck: false
    }),
    devTools: true
})

export default storeD