import React from 'react'

import toDivide from '../../utils/toDivide'

import type { ItemChild } from '../../redux/slices/dataset/types'

import classes from './UnitedList.module.scss'

type UnitedListProps = {
	title?: React.ReactNode
	items: ItemChild[]
	style?: React.CSSProperties
}

const UnitedList: React.FC<UnitedListProps> = ({ title, items, style }) => {
	return (
		<>
			{title && <h3> {title} </h3>}
			<ul className={classes.quantityItems} style={style}>
				{items &&
					items.map((item) => (
						<li key={item.Name} className={classes.quantityItem}>
							<span className={classes.quantityItem_name}> {item.Name} </span>
							<span className={classes.quantityItem_percentage}>
								{item?.QuantityPercentage || item.IncomePercentage}%
							</span>
							<span className={classes.quantityItem_value}> {toDivide(item?.Quantity || item?.Income)} </span>
						</li>
					))}
			</ul>
		</>
	)
}

export default UnitedList
