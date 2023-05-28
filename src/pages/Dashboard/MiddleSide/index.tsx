import React from 'react'

import type { Dataset } from '../../../redux/slices/dataset/types'

import Bubblechart from './Bubblechart'

type MiddleSideProps = {
	data: Dataset
}

const MiddleSide: React.FC<MiddleSideProps> = ({ data }) => {
	return (
		<div className='middle-side'>
			<Bubblechart data={data} />
		</div>
	)
}

export default MiddleSide
