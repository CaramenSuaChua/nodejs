import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axiosInstance from '../../config/config'
import { setTokenCookie } from '../../components/help/storage'

///////initital
const initialState = {
    profile : {}
}

/////action
const ACTION = {
    SIGN_IN : 'auth/authSlice',
    PROFILE : 'auth/profile'
}

///////////api
export const signIn = createAsyncThunk(ACTION.SIGN_IN, async body => {
    return axiosInstance.post('/adminLogin', body)
})

export const getProfile = createAsyncThunk(ACTION.PROFILE, async body => {
    return axiosInstance.get('/api/profile/');
});

const authSlice = createSlice({
    name: 'auth',
    initialState : initialState,
    reducers: {
        authLogout: (state, action) => {
          state.profile = action.payload;
        }
      },
    extraReducers : {
        [signIn.pending.toString()]: state => {
            state.loading = true
        },
        [signIn.rejected.toString()]: state => {
            state.loading = false
        },
        [signIn.fulfilled.toString()]: (state, action) => {
            state.loading = false
            setTokenCookie(action.payload.access, action.payload.refresh)
            state.profile = action.payload
        },

        [getProfile.pending.toString()]: state => {
            state.loading = true;
          },
        [getProfile.rejected.toString()]: state => {
            state.loading = false;
          },
        [getProfile.fulfilled.toString()]: (state, action) => {
            state.loading = false;
            state.profile = action.payload;
          }
    }
})

export const { authLogout } = authSlice.actions;
const {reducer : authReducer} = authSlice
export default authReducer
