import { configureStore } from '@reduxjs/toolkit';
import { serviceReducer } from './service';

export const store = configureStore({
	reducer: {
		service:  serviceReducer,
	}
});

export default store;