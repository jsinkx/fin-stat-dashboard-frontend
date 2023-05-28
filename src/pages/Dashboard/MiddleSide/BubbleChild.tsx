import React from 'react'

import positions from '../../../shared/positions'

import toDivide from '../../../utils/toDivide'

import type { ItemChild } from '../../../redux/slices/dataset/types'

type BubbleChildProps = {
	index: number
	indexChild: number
	itemChild: ItemChild
	isGroupBubble?: boolean
	onClick?: () => void
}

const BubbleChild: React.FC<BubbleChildProps> = ({
	index,
	indexChild,
	itemChild,
	isGroupBubble,
	onClick,
}) => {
	return (
		<React.Fragment key={itemChild.Name}>
			<div
				className={`bubble_child ${!isGroupBubble ? '' : 'bubble_child_group'}`}
				onClick={onClick}
				style={{
					left: `${positions[index]?.bubbleChildX[indexChild]}vw`,
					top: `${(positions[index]?.bubbleChildY[indexChild] || 10) / 2}vw`,
				}}>
				<p className={!isGroupBubble ? 'IncomePercentage' : 'income-group-text'}>
					{!isGroupBubble ? itemChild?.IncomePercentage + '%' : '...'}
				</p>
				{!isGroupBubble && (
					<p className='IncomeValues'>
						{itemChild.Name} <br /> {toDivide(itemChild.Income)}
					</p>
				)}
			</div>
			<div
				className='line_child'
				style={{
					left: `${positions[index]?.bubbleChildLineX[indexChild]}vw`,
					top: `${(positions[index]?.bubbleChildLineY[indexChild] || 10) / 2}vw`,
					transform: `rotate(${positions[index]?.bubbleChildLineD[indexChild]}deg)`,
					width: `${positions[index]?.bubbleChildLineW[indexChild]}vw`,
				}}></div>
		</React.Fragment>
	)
}

export default BubbleChild
