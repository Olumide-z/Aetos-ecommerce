import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cartSlice';
import colorReducer from '../features/colorSlice';

export const store = configureStore({
  reducer: {
    cart : cartReducer,
    color : colorReducer,
  },
});
