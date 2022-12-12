import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/config";
const initialState = {
    cart_list : []
}

const ACTION = {
    GET_CART : 'cart/getCart'
}

export const getCart = createAsyncThunk(ACTION.GET_CART, async body => {
    return axiosInstance.get('/cart/')
})

const cartSlice = createSlice({
    name:'cart',
    initialState : initialState,
    reducers : {},
    extraReducers : {
        [getCart.pending.toString()]: state => {
            state.loading = true
        },
        [getCart.rejected.toString()] : state => {
            state.loading = false
        },
        [getCart.fulfilled.toString()] : (state, action) => {
            state.loading = false
            state.cart_list = action.payload

        },

    }
})

const {reducer: cartReducer} = cartSlice
export default cartReducer