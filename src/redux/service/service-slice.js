import { createSlice } from '@reduxjs/toolkit';
import serviceOperations from './service-operations';

const initialState = {
	modalTrigger: false
};

const serviceSlice = createSlice({
	name: 'service',
	initialState,
	extraReducers: {
		[serviceOperations.modalTrigger.fulfilled]: (state, { payload }) => {
			state.modalTrigger = payload;
		}
	},
});

export default serviceSlice.reducer;
