import React from 'react'

import dashboardPic from '../assets/images/pictures/dashboard.png'
import '../assets/styles/pages/Prank.scss'

const Prank: React.FC = () => {
	return (
		<div className='div_prank'>
			<img className='img_dashboard' src={dashboardPic} alt='prank' />
		</div>
	)
}

export default Prank
