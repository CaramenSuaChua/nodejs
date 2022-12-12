import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/config";

const initialState = {
    orders_list : []
}

const ACTION = {
    GET_ORDER : 'order/getOrder'
}

export const getOrder = createAsyncThunk(ACTION.GET_ORDER, async body => {
    return axiosInstance.get('/orders/')
})

const orderSlice = createSlice({
    name:'orders',
    initialState : initialState,
    reducers : {},
    extraReducers : {
        [getOrder.pending.toString()]: state => {
            state.loading = true
        },
        [getOrder.rejected.toString()] : state => {
            state.loading = false
        },
        [getOrder.fulfilled.toString()] : (state, action) => {
            state.loading = false
            state.orders_list = action.payload

        },

    }
})

const {reducer: orderReducer} = orderSlice
export default orderReducer