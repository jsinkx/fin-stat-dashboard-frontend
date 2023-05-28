import Status from '../../../shared/status'

export type DatasetThunk = FormData

export type DataByMonths = { [key: string]: number }

export type Item = {
	Name: string
	QuantityPercentage?: number
	Quantity?: number
	Income: number
	IncomePercentage: number
	IncomeBreakdowns: ItemChild[]
}

export type ItemChild = Omit<Item, 'IncomeBreakdowns'>

export type OperatingProfits = {
	Total: number
	ByMonth: DataByMonths
}

export type MarketingData = {
	B2B: [number, number]
	B2C: [number, number]
}

export type Dataset = {
	Year: number
	RealIncome: number
	TargetIncome: number
	AverageIncome: number
	IncomePercent: number
	ByMonths: DataByMonths
	Items: Item[]
	OperatingProfits: {
		Total: number
		ByMonths: DataByMonths
	}
	MarketingStrategies: MarketingData
}

export type Data = {
	Years: number[] | string[]
	Datasets: Dataset[]
}

export interface IDatasetState {
	data: Data | null
	status: Status
}
