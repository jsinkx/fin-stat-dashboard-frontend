import React from 'react'
import { Route, Routes } from 'react-router-dom'

const App: React.FC = () => {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<h2> Hello! </h2>}></Route>
			</Routes>
		</div>
	)
}

export default App
