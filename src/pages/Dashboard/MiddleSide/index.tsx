import React from 'react'

// @ts-ignore
import Bubblechart from './Bubblechart.tsx'

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
