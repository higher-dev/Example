import { configureStore } from '@reduxjs/toolkit';
import businessReducer from './reducers/businessReducer';
import viewTypeReducer from './reducers/viewTypeReducer';

const store = configureStore({
  reducer: {
    showType : viewTypeReducer,
    business : businessReducer
  },
});

export default store;
