import { configureStore } from '@reduxjs/toolkit'
import shared from '@Screens/Shared/Store/sharedSlice'
import storage from '@Store/storage'
import { combineReducers } from "redux"
import { persistReducer } from 'redux-persist'
import { api } from '../Services'

const reducers = combineReducers({
    shared,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
    // .concat(
    //     api.middleware,
    // ),
});

export default store;