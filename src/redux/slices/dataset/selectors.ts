import { RootState } from '../../store'

export const selectDatasetData = (state: RootState) => state.dataset.data
export const selectDatasetStatus = (state: RootState) => state.dataset.status
