import React from 'react'
import { Outlet } from 'react-router-dom'

const HomeLayout: React.FC = () => {
	return (
		<>
			<header className='header_home'>
				<h1>Financial Statistic Dashboard</h1>
			</header>
			<main className='main_home'>
				<Outlet />
			</main>
		</>
	)
}

export default HomeLayout
