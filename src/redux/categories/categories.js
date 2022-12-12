import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axiosInstance from '../../config/config'

///////initital
const initialState = {
    cate_list : []
}

/////action
const ACTION = {
    GET_CATE : 'cate/getCate'
}

///////////api
export const getCate = createAsyncThunk(ACTION.GET_CATE, async body => {
    return axiosInstance.get('/category/')
})

const categorySlice = createSlice({
    name: 'category',
    initialState : initialState,
    reducers : {},
    extraReducers : {
        [getCate.pending.toString()]: state => {
            state.loading = true
        },
        [getCate.rejected.toString()]: state => {
            state.loading = false
        },
        [getCate.fulfilled.toString()]: (state, action) => {
            state.loading = false
            state.cate_list = action.payload
        }
    }
})

const {reducer : categoryReducer} = categorySlice
export default categoryReducer
