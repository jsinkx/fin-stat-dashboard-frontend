import React from 'react'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

import colors from '../../../shared/colors'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend)

const options = {
	responsive: true,
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
	},
}

type AreaChartProps = {
	dataByMonths: { [key: string]: number }
}

const AreaChart: React.FC<AreaChartProps> = ({ dataByMonths }) => {
	const labels = Object.keys(dataByMonths)

	const data = {
		labels,
		datasets: [
			{
				fill: {
					target: 'origin',
					above: 'rgba(11, 30, 100, 0.6)',
				},
				data: labels.map((month) => dataByMonths[month]),
				pointRadius: -1,
				backgroundColor: colors.DARK_BLUE_ACTIVE,
				borderColor: colors.DARK_BLUE_ACTIVE,
			},
		],
	}

	return <Line options={options} data={data} />
}

export default AreaChart
