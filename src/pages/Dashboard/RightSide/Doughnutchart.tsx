import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

import colors from '../../../shared/colors'
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

const optionsForInsideModal = {
	responsive: true,
	plugins: {
		legend: {
			display: true,
			onClick: () => false,
			reverse: true,
		},
		title: {
			display: true,
			text: 'B2B / B2C',
			color: Colors.MILK,
			font: {
				size: 18,
			},
		},
	},
}

type DoughnutchartProps = {
	marketingData: {
		B2B: [number, number]
		B2C: [number, number]
	}
	onClick?: () => void
	isInsideModal?: boolean
}

const Doughnutchart: React.FC<DoughnutchartProps> = ({ marketingData, onClick, isInsideModal }) => {
	const data = {
		labels: ['B2C', 'B2B'],
		datasets: [
			{
				data: [marketingData.B2B[1], marketingData.B2C[1]],
				label: ' Percentage ',
				borderColor: [colors.DARK_BLUE_ACTIVE, colors.EXTRA_LIGHT_BLUE],
				borderWidth: 5,
				borderRadius: 10,
				cutout: '85%',
			},
		],
	}

	return (
		<Doughnut
			data={data}
			onClick={onClick}
			style={{
				cursor: isInsideModal ? 'default' : 'pointer',
			}}
			options={isInsideModal ? optionsForInsideModal : options}
		/>
	)
}

export default Doughnutchart
