import React from 'react'

import LeftSide from './LeftSide'
import MiddleSide from './MiddleSide'
import RightSide from './RightSide'

import exampleData from '../../assets/data/example_data.json'
import '../../assets/styles/pages/dashboard/Dashboard.scss'

const Dashboard: React.FC = () => {
	const [data] = React.useState<any>(exampleData)

	return (
		<div className='content'>
			<LeftSide data={data} />
			<MiddleSide data={data} />
			<RightSide data={data} />
		</div>
	)
}

export default Dashboard
