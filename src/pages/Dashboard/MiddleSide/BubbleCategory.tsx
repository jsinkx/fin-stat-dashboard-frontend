import React from 'react'

import positions from '../../../shared/positions'

import toDivide from '../../../utils/toDivide'

import type { Item } from '../../../redux/slices/dataset/types'

type BubbleCategoryProps = {
	index: number
	item: Item
	maxIncome: number
	isGroupBubble?: boolean
	onClick?: () => void
}

const BubbleCategory: React.FC<BubbleCategoryProps> = ({
	index,
	item,
	maxIncome,
	isGroupBubble,
	onClick,
}) => {
	const size = 6 * (0.8 + item.IncomePercentage ** 1.35 / 220) + (!isGroupBubble ? 0 : -1.2)

	return (
		<>
			<div
				className={`bubble_category ${!isGroupBubble ? '' : 'bubble_category_group'}`}
				onClick={onClick}
				style={{
					left: `${positions[index]?.bubbleCategoryX}vw`,
					top: `${(positions[index]?.bubbleCategoryY || 10) / 2}vw`,
					background: `linear-gradient(80deg, ${
						item.Income >= maxIncome && !isGroupBubble
							? '#d40f56 23%, #701063 50%, #0c1097 100%)'
							: 'rgba(108,41,176, 1), rgba(20,17,124, 1))'
					}`,
					width: `${item.Income >= maxIncome && !isGroupBubble ? size + 0.8 : size}vw`,
					height: `${item.Income >= maxIncome && !isGroupBubble ? size + 0.8 : size}vw`,
					boxShadow:
						item.Income >= maxIncome && !isGroupBubble ? '0 0 30px #d61059, inset 0 0 1px #0c1097' : 'none',
				}}>
				{!isGroupBubble && <p className='income-value'>{toDivide(item.Income)}</p>}
				<p className={!isGroupBubble ? '' : 'income-group-text'}>{!isGroupBubble ? item.Name : '...'}</p>
				{!isGroupBubble && <p className='income-percentage'>{item.IncomePercentage}%</p>}
			</div>
			<div
				className='line'
				style={{
					left: `${positions[index]?.bubbleCategoryLineX}vw`,
					top: `${(positions[index]?.bubbleCategoryLineY || 10) / 2}vw`,
					transform: `rotate(${positions[index]?.bubbleCategoryLineD}deg)`,
					width: `${positions[index]?.bubbleCategoryLineW}vw`,
				}}></div>
		</>
	)
}

export default BubbleCategory
