import { configureStore } from '@reduxjs/toolkit'

import datasetReducer from './slices/dataset/slice'

export const store = configureStore({
	reducer: {
		dataset: datasetReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
