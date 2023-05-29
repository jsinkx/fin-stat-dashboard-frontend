import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'

import Colors from '../../../shared/colors'

import type { DataByMonths } from '../../../redux/slices/dataset/types'
import Modal from '../../../components/Modal'

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
				color: Colors.MILK,
			},
		},
	},
}

const optionsForInsideModal = {
	indexAxis: 'x' as const,
	responsive: true,
	plugins: {
		legend: {
			display: false,
		},
		title: {
			display: true,
			text: 'Operating Profits',
			color: Colors.MILK,
			font: {
				size: 18,
			},
		},
	},
	scales: {
		y: {
			ticks: {
				color: Colors.MILK,
			},
		},
		x: {
			ticks: {
				color: Colors.MILK,
			},
		},
	},
}

type BarchartProps = {
	dataByMonths: DataByMonths
}

const Barchart: React.FC<BarchartProps> = ({ dataByMonths }) => {
	const [isOpen, setIsOpen] = React.useState<boolean>(false)

	const labels = Object.keys(dataByMonths)

	const data = {
		labels,
		datasets: [
			{
				data: labels.map((month) => dataByMonths[month]),
				backgroundColor: 'rgba(255, 99, 132, 0.78)',
			},
		],
	}

	return (
		<>
			<Modal {...{ isOpen, setIsOpen }}>
				<Bar
					style={{
						maxHeight: '110%',
						width: '100%',
						cursor: 'default',
					}}
					options={optionsForInsideModal}
					data={data}
				/>
			</Modal>
			<Bar
				onClick={() => setIsOpen(true)}
				style={{
					maxHeight: '70%',
					cursor: 'pointer',
				}}
				options={options}
				data={data}
			/>
		</>
	)
}

export default Barchart
