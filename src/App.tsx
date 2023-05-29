import React from 'react'
import { Route, Routes } from 'react-router-dom'

import HomeLayout from './layouts/HomeLayout'
import DashboardLayout from './layouts/DashboardLayout'

import Notifications from './components/Notifications'

import 'react-toastify/dist/ReactToastify.css'
import Loading from './components/Loading'

const Home = React.lazy(() => import(/* webpackChunkName: "Home" */ './pages/Home'))
const Prank = React.lazy(() => import(/* webpackChunkName: "Prank" */ './pages/Prank'))
const Dashboard = React.lazy(() => import(/* webpackChunkName: "Dashboard" */ './pages/Dashboard'))

const App: React.FC = () => {
	return (
		<div className='App'>
			<Notifications />
			<Routes>
				<Route path='/' element={<HomeLayout />}>
					<Route
						path=''
						element={
							<React.Suspense fallback={<Loading />}>
								<Home />
							</React.Suspense>
						}
					/>
					<Route
						path='*'
						element={
							<React.Suspense fallback={<Loading />}>
								<Home />
							</React.Suspense>
						}
					/>
				</Route>
				<Route path='/dashboard' element={<DashboardLayout />}>
					<Route
						path=''
						element={
							<React.Suspense fallback={<Loading />}>
								<Dashboard />
							</React.Suspense>
						}></Route>
					<Route
						path='uploaded'
						element={
							<React.Suspense fallback={<Loading />}>
								<Dashboard />
							</React.Suspense>
						}></Route>
					<Route
						path='v2'
						element={
							<React.Suspense fallback={<Loading />}>
								<Prank />
							</React.Suspense>
						}></Route>
				</Route>
			</Routes>
		</div>
	)
}

export default App
