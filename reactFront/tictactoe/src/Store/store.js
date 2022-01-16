import mainStateReducer from './../Reducers/mainStateReducer'
import {configureStore} from '@reduxjs/toolkit'

export default configureStore({
    reducer: {
        appState: mainStateReducer
    }
})