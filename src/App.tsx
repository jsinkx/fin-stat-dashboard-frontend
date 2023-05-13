import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header/Header'
import Home from './pages/Home'

const App: React.FC = () => {
	return (
		<div className='App'>
			<Header />
			<main>
				<Routes>
					<Route path='/' element={<Home />}></Route>
				</Routes>
			</main>
		</div>
	)
}

export default App
