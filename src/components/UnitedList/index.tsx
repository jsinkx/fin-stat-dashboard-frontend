import React from 'react'

import toDivide from '../../utils/toDivide'

import classes from './UnitedList.module.scss'

type Item = {
	Name: string
	Income: number
	IncomePercentage: number
	Quantity?: number
	QuantityPercentage?: number
}

type UnitedListProps = {
	title?: React.ReactNode
	items: Item[]
}

const UnitedList: React.FC<UnitedListProps> = ({ title, items }) => {
	return (
		<>
			{title && <h3> {title} </h3>}
			<ul className={classes.quantityItems}>
				{items &&
					items.map((item) => (
						<li key={item.Name} className={classes.quantityItem}>
							<span className={classes.quantityItem_name}> {item.Name} </span>
							<span className={classes.quantityItem_percentage}>
								{' '}
								{item?.QuantityPercentage || item.IncomePercentage}%{' '}
							</span>
							<span className={classes.quantityItem_value}> {toDivide(item?.Quantity || item?.Income)} </span>
						</li>
					))}
			</ul>
		</>
	)
}

export default UnitedList
