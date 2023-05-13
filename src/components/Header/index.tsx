import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../../assets/images/milk-logo.png'
import classes from './Header.module.scss'

const Header: React.FC = () => {
	return (
		<header>
			<img src={logo} alt='logo' />
			<h1> Fin Stat Dashboard </h1>
			<ul className={classes.ul_right}>
				<NavLink className={({ isActive }) => (isActive ? classes.active : '')} to='/'>
					<li> Example data </li>
				</NavLink>
			</ul>
		</header>
	)
}

export default Header
