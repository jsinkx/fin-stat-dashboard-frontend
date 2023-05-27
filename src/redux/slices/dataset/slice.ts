import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import Status from '../../../shared/status'
import axios from '../../../axios'

import type { DatasetThunk } from './types'

export const fetchDataset = createAsyncThunk<any, DatasetThunk>('dataset/Load', async (params) => {
	const { data } = await axios.post('/excel', params)
	return data
})

const initialState: any = {
	data: null,
	status: Status.UNSET,
}

export const datasetSlice = createSlice({
	name: 'dataset',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchDataset.pending, (state) => {
			state.data = null
			state.status = Status.LOADING
		})
		builder.addCase(fetchDataset.fulfilled, (state, payload) => {
			state.data = JSON.parse(String(payload.payload))
			state.status = Status.LOADED
		})
		builder.addCase(fetchDataset.rejected, (state) => {
			state.data = null
			state.status = Status.ERROR
		})
	},
})

export default datasetSlice.reducer
