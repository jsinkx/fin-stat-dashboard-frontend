import React from 'react'
// import {
// 	Chart as ChartJS,
// 	CategoryScale,
// 	LinearScale,
// 	PointElement,
// 	LineElement,
// 	Title,
// 	Tooltip,
// 	Filler,
// 	Legend,
// 	ChartArea,
// } from 'chart.js'
// import { Chart } from 'react-chartjs-2'

import {
	Chart as ChartJS,
	LinearScale,
	CategoryScale,
	BarElement,
	PointElement,
	LineElement,
	Legend,
	Tooltip,
	registerables as registerablesJS,
	Title,
	Filler,
	ChartArea,
} from 'chart.js'
import { Chart } from 'react-chartjs-2'

import colors from '../../../shared/colors'
import Colors from '../../../shared/colors'

ChartJS.register(...registerablesJS)
ChartJS.register(
	LinearScale,
	CategoryScale,
	BarElement,
	PointElement,
	LineElement,
	Legend,
	Tooltip,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend
)

function createGradient(ctx: CanvasRenderingContext2D, area: ChartArea) {
	const colorStart = 'rgba(9,31,115, 1)'
	const colorMid = 'rgba(9,31,115, 0.8)'
	const colorEnd = 'rgba(9,31,115, 0.2)'

	const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top)

	gradient.addColorStop(1, colorStart)
	gradient.addColorStop(0.4, colorMid)
	gradient.addColorStop(0.1, colorEnd)

	return gradient
}

const options = {
	responsive: true,
	events: [],
	plugins: {
		legend: {
			display: false,
		},
	},
	scales: {
		y: {
			display: false,
			grid: {
				display: false,
			},
		},
		x: {
			ticks: {
				color: colors.MILK,
			},
		},
	},
}

// This options using if chart inside modal window
const optionsForInsideModal = {
	responsive: true,
	plugins: {
		legend: {
			display: false,
		},
		title: {
			display: true,
			text: 'Incomes',
			color: colors.MILK,
			font: {
				size: 18,
			},
		},
	},
	scales: {
		y: {
			ticks: { color: colors.MILK },
		},
		x: {
			ticks: {
				color: colors.MILK,
			},
		},
	},
}

type AreachartProps = {
	dataByMonths: { [key: string]: number }
	onClick?: () => void
	isInsideModal?: boolean
}

const Areachart: React.FC<AreachartProps> = ({ dataByMonths, onClick, isInsideModal }) => {
	const chartRef = React.useRef<ChartJS>(null)
	const [chartData, setChartData] = React.useState<any>({
		datasets: [],
	})

	const labels = Object.keys(dataByMonths)

	const data = {
		labels,
		datasets: [
			{
				fill: true,
				data: labels.map((month) => dataByMonths[month]),
				color: isInsideModal ? 'red' : 'none',
				pointRadius: isInsideModal ? 4 : -1,
				pointBackgroundColor: Colors.DARK_BLUE_ACTIVE,
			},
		],
	}

	React.useEffect(() => {
		const chart = chartRef.current

		if (!chart) {
			return
		}

		const chartData = {
			...data,
			fill: true,
			datasets: data.datasets.map((dataset) => ({
				...dataset,
				borderColor: colors.DARK_BLUE_ACTIVE,
				backgroundColor: createGradient(chart.ctx, chart.chartArea),
			})),
		}

		setChartData(chartData)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dataByMonths])

	return (
		<Chart
			onClick={onClick}
			style={{
				cursor: isInsideModal ? 'default' : 'pointer',
			}}
			ref={chartRef}
			options={isInsideModal ? optionsForInsideModal : options}
			data={chartData}
			type={'line'}
		/>
	)
}

export default Areachart
