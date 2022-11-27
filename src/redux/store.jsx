import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from './slice/authSlice'
import blogReducer from './slice/blogSlice'
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";


const persistConfig = {
    key: "root",
    version: 1,
    storage
}

const rootReducer = combineReducers({
    auth : authReducer,  
    blog : blogReducer
})

const persistedReducer = persistReducer(persistConfig , rootReducer)

const store = configureStore({
    reducer : persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default  store