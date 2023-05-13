import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Dashboard from './pages/Dashboard'

const App: React.FC = () => {
	return (
		<div className='App'>
			<Header />
			<main>
				<Routes>
					<Route path='/' element={<Dashboard />}></Route>
				</Routes>
			</main>
		</div>
	)
}

export default App
