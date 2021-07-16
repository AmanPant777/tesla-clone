import { configureStore } from '@reduxjs/toolkit';
import Carreducer from '../features/car/CarSlics'

export const store = configureStore({
  reducer: {
    car: Carreducer,
  },
});
