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
type AreaChartProps = {
	dataByMonths: { [key: string]: number }
}

const AreaChart: React.FC<AreaChartProps> = ({ dataByMonths }) => {
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
				pointRadius: -1,
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

	return <Chart ref={chartRef} options={options} data={chartData} type={'line'} />
}

export default AreaChart
