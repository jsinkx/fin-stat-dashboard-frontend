import React from 'react'

import MiddleSide from './MiddleSide'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

import exampleData from '../../assets/data/example_data.json'
import '../../assets/styles/pages/dashboard/Dashboard.scss'

const Dashboard: React.FC = () => {
	const [data] = React.useState<any>(exampleData)
	const [currentYear, setCurrentYear] = React.useState<string>(data?.Years[0] as string)

	const currentDatasetByYear = data.Datasets.find((d: any) => d.Year === currentYear) // Дадасет выбранного года

	return (
		<div className='content'>
			<LeftSide data={currentDatasetByYear} years={data?.Years} {...{ currentYear, setCurrentYear }} />
			<MiddleSide data={currentDatasetByYear} />
			<RightSide data={currentDatasetByYear} />
		</div>
	)
}

export default Dashboard
