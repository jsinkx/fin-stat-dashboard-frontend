import React from 'react'

import UnitedList from '../../../components/UnitedList'

import type { Item } from '../../../redux/slices/dataset/types'

import toDivide from '../../../utils/toDivide'

type ItemsListChildrenProps = {
	item: Item
}

const ItemsListChildren: React.FC<ItemsListChildrenProps> = ({ item }) => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				flexWrap: 'wrap',
				marginTop: '4vw',
				fontSize: '1.25em',
			}}>
			<div
				key={item.Name}
				style={{
					display: 'initial',
					width: '400px',
					marginInline: 'auto',
				}}>
				<h2 style={{ textAlign: 'center' }}>
					{item.Name} {item.IncomePercentage}% ({toDivide(item.Income)})
				</h2>
				<UnitedList
					items={item.IncomeBreakdowns}
					style={{
						marginLeft: '12%',
					}}
				/>
			</div>
		</div>
	)
}

export default ItemsListChildren
