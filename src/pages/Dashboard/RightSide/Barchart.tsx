import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'

import colors from '../../../shared/colors'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const options = {
	indexAxis: 'y' as const,
	maintainAspectRatio: false,
	events: [],
	responsive: true,
	plugins: {
		legend: {
			display: false,
		},
		title: {
			display: false,
		},
	},
	scales: {
		x: {
			display: false,
			grid: {
				display: false,
			},
		},
		y: {
			ticks: {
				color: colors.MILK,
			},
		},
	},
}

type BarchartProps = {
	dataByMonths: { [key: string]: number }
}

const Barchart: React.FC<BarchartProps> = ({ dataByMonths }) => {
	const labels = Object.keys(dataByMonths)

	const data = {
		labels,
		datasets: [
			{
				data: labels.map((month) => dataByMonths[month]),
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
			},
		],
	}

	return <Bar style={{ maxHeight: '70%' }} options={options} data={data} />
}

export default Barchart
