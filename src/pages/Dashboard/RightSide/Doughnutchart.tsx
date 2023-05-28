import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

import Colors from '../../../shared/colors'

ChartJS.register(ArcElement, Tooltip, Legend)

const options = {
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
}

type DoughnutchartProps = {
	marketingData: {
		B2B: [number, number]
		B2C: [number, number]
	}
}

const Doughnutchart: React.FC<DoughnutchartProps> = ({ marketingData }) => {
	const data = {
		labels: ['B2C', 'B2B'],
		datasets: [
			{
				data: [marketingData.B2B[1], marketingData.B2C[1]],
				label: ' Percentage ',
				borderColor: [Colors.DARK_BLUE_ACTIVE, Colors.EXTRA_LIGHT_BLUE],
				borderWidth: 5,
				borderRadius: 4,
				cutout: '85%',
			},
		],
	}

	return <Doughnut data={data} options={options} />
}

export default Doughnutchart
