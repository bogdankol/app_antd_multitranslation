
import { createAsyncThunk } from '@reduxjs/toolkit';

const modalTrigger = createAsyncThunk(
	'service/modalTrigger',
	({ trigger }) => trigger
);


const serviceOperations = {
	modalTrigger
};

export default serviceOperations;