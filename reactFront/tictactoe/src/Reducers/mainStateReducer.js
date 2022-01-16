import {createSlice} from '@reduxjs/toolkit'
import {appState} from '../Store/appState'

export const mainStateReducer = createSlice({
    name: 'appState',
    initialState: appState,
    reducers:{
        setLoggedUser: (state, action) =>{
            state.loggedUser = action.payload.loggedUser;
        },
        setUserList: (state, action) =>{
            state.userList = action.payload.userList;
        }
    }
})

export const actions = mainStateReducer.actions;

export default mainStateReducer.reducer;