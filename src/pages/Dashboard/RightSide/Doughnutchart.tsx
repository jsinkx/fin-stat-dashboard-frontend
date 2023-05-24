import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

import colors from '../../../shared/colors'

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
		datasets: [
			{
				data: [marketingData.B2B[1], marketingData.B2C[1]],
				borderColor: [colors.DARK_BLUE_ACTIVE, '#833856'],
				borderWidth: 5,
				borderRadius: 10,
				cutout: '85%',
			},
		],
	}

	return <Doughnut options={options} data={data} />
}

export default Doughnutchart
