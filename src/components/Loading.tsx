import React from 'react'
import { PropagateLoader } from 'react-spinners'

const Loading: React.FC = () => {
	return (
		<div className='global_loading_block'>
			<h2> 😴 Still Loading...</h2>
			<PropagateLoader cssOverride={{ width: '10vw', height: '10vw', margin: '3vw auto' }} color='#D40F56' />
		</div>
	)
}

export default Loading
