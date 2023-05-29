import React from 'react'

import UnitedList from '../../../components/UnitedList'

import type { Item } from '../../../redux/slices/dataset/types'

import toDivide from '../../../utils/toDivide'

type ItemsListCategoryProps = {
	items: Item[]
}

const ItemsListCategory: React.FC<ItemsListCategoryProps> = ({ items }) => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				flexWrap: 'wrap',
				marginTop: '4vw',
			}}>
			{items.map((item: Item) => {
				return (
					<div
						key={item.Name}
						style={{
							display: 'initial',
							margin: '1vw 5vw',
						}}>
						<UnitedList
							title={`${item.Name} ${item.IncomePercentage}% (${toDivide(item.Income)})`}
							items={item.IncomeBreakdowns}
						/>
					</div>
				)
			})}
		</div>
	)
}

export default ItemsListCategory
