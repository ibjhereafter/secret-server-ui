import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../redux/rootReducer/index';

const store = configureStore({
    reducer: rootReducer,
})

export default store

