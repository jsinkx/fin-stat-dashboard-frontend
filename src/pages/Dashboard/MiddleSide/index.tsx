import React from 'react'

import Bubblechart from './Bubblechart'

type MiddleSideProps = {
	data: any
}

const MiddleSide: React.FC<MiddleSideProps> = ({ data }) => {
	return (
		<div className='middle-side'>
			<Bubblechart data={data} />
		</div>
	)
}

export default MiddleSide
