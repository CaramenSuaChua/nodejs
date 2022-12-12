import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axiosInstance from '../../config/config'

///////initital
const initialState = {
    hotel_list : [],
    rooms_list : [],
    trans_list : []
}

/////action
const ACTION = {
    GET_HOTELS : 'hotels/getHotel',
    POST_HOTELS : 'hotels/postHotel',
    EDIT_HOTELS : 'hotels/editHotel',
    DEL_HOTELS : 'hotels/getHotel',
    GET_ROOMS : 'hotels/getRooms',
    POST_ROOMS : 'hotels/postRooms',
    EDIT_ROOMS : 'hotels/editRooms',
    DEL_ROOMS : 'hotels/delRoom',
    GET_TRAN : 'hotels/getTran'
}

///////////api
export const getHotel = createAsyncThunk(ACTION.GET_HOTELS, async body => {
    return axiosInstance.get('/hotels')
})

export const postHotel = createAsyncThunk(ACTION.POST_HOTELS, async body => {
    return axiosInstance.post('/add_hotel/' , body)
})

export const editHotel = createAsyncThunk(ACTION.EDIT_HOTELS, async body => {
    return axiosInstance.post(`/edit_hotel/${body.id}` , body)
})

export const delHotel = createAsyncThunk(ACTION.DEL_HOTELS, async body => {
    return axiosInstance.post('/del_hotel', {id : body})
})

export const getRooms = createAsyncThunk(ACTION.GET_ROOMS, async body => {
    return axiosInstance.get('/rooms/')
})

export const postRooms = createAsyncThunk(ACTION.POST_ROOMS, async body => {
    return axiosInstance.post('/add_room/' , body)
})

export const editRooms = createAsyncThunk(ACTION.EDIT_ROOMS, async body => {
    return axiosInstance.post(`/edit_room/${body.id}` , body)
})

export const delRoom = createAsyncThunk(ACTION.DEL_ROOMS, async body => {
    return axiosInstance.post('/del_room/', {id : body})
})

export const getTran = createAsyncThunk(ACTION.GET_TRAN, async body => {
    return axiosInstance.get('/transactions')
})

const hotelSlice = createSlice({
    name: 'hotels',
    initialState : initialState,
    reducers : {},
    extraReducers : {
        [getHotel.pending.toString()]: state => {
            state.loading = true
        },
        [getHotel.rejected.toString()]: state => {
            state.loading = false
        },
        [getHotel.fulfilled.toString()]: (state, action) => {
            state.loading = false
            state.hotel_list = action.payload
        },
        
        [postHotel.pending.toString()]: state => {
            state.loading = true
        },
        [postHotel.rejected.toString()]: state => {
            state.loading = false
        },
        [postHotel.fulfilled.toString()]: (state, action) => {
            state.loading = false
        },

        [editHotel.pending.toString()]: state => {
            state.loading = true
        },
        [editHotel.rejected.toString()]: state => {
            state.loading = false
        },
        [editHotel.fulfilled.toString()]: (state, action) => {
            state.loading = false
        },

        [getRooms.pending.toString()]: state => {
            state.loading = true
        },
        [getRooms.rejected.toString()]: state => {
            state.loading = false
        },
        [getRooms.fulfilled.toString()]: (state, action) => {
            state.loading = false
            state.rooms_list = action.payload
        },

        [postRooms.pending.toString()]: state => {
            state.loading = true
        },
        [postRooms.rejected.toString()]: state => {
            state.loading = false
        },
        [postRooms.fulfilled.toString()]: (state, action) => {
            state.loading = false
        },

        [editRooms.pending.toString()]: state => {
            state.loading = true
        },
        [editRooms.rejected.toString()]: state => {
            state.loading = false
        },
        [editRooms.fulfilled.toString()]: (state, action) => {
            state.loading = false
        },

        [getTran.pending.toString()]: state => {
            state.loading = true
        },
        [getTran.rejected.toString()]: state => {
            state.loading = false
        },
        [getTran.fulfilled.toString()]: (state, action) => {
            state.loading = false
            state.trans_list = action.payload
        }
    }
})

const {reducer : hotelsReducer} = hotelSlice
export default hotelsReducer
