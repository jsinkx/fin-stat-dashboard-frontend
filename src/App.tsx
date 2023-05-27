import React from 'react'
import { Route, Routes } from 'react-router-dom'

import HomeLayout from './layouts/HomeLayout'
import DashboardLayout from './layouts/DashboardLayout'

import Home from './pages/Home'
import Prank from './pages/Prank'
import Dashboard from './pages/Dashboard'

import Notifications from './components/Notifications'

import 'react-toastify/dist/ReactToastify.css'

const App: React.FC = () => {
	return (
		<div className='App'>
			<Notifications />
			<Routes>
				<Route path='/' element={<HomeLayout />}>
					<Route path='' element={<Home />} />
				</Route>
				<Route path='/dashboard' element={<DashboardLayout />}>
					<Route path='' element={<Dashboard />}></Route>
					<Route path='uploaded' element={<Dashboard />}></Route>
					<Route path='v2' element={<Prank />}></Route>
				</Route>
			</Routes>
		</div>
	)
}

export default App
