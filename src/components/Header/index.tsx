import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import Status from '../../shared/status'
import useAppSelector from '../../hooks/useAppSelector'
import { selectDatasetStatus } from '../../redux/slices/dataset/selectors'

import logo from '../../assets/images/logo/milk-logo.png'
import classes from './Header.module.scss'

const Header: React.FC = () => {
	const status = useAppSelector(selectDatasetStatus)

	const isLoaded = status === Status.LOADED || status === Status.LOADING

	return (
		<header className={classes.header_default}>
			<Link to='/'>
				<div>
					<img src={logo} alt='logo' />
					<h1> Fin Stat Dashboard </h1>
				</div>
			</Link>

			<ul className={classes.ul_right}>
				<NavLink
					className={({ isActive }) => (isActive ? classes.active : '')}
					to={isLoaded ? '/dashboard/uploaded' : '/'}
					end>
					<li> {isLoaded ? 'Uploaded data' : 'Upload data'} </li>
				</NavLink>

				<NavLink className={({ isActive }) => (isActive ? classes.active : '')} to='/dashboard' end>
					<li> Example data </li>
				</NavLink>
			</ul>
		</header>
	)
}

export default Header
