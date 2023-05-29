import React from 'react'

import positions from '../../../shared/positions'

import moneyIcon from '../../../assets/images/icons/money-icon.png'

import Modal from '../../../components/Modal'
import BubbleChild from './BubbleChild'
import BubbleCategory from './BubbleCategory'

import type { Dataset, Item, ItemChild } from '../../../redux/slices/dataset/types'
import ItemsListCategory from './ItemsListCategory'
import ItemsListChildren from './ItemsListChildren'

type BubblechartProps = {
	data: Dataset
}

const Bubblechart: React.FC<BubblechartProps> = ({ data }) => {
	const [isOpen, setIsOpen] = React.useState<boolean>(false)
	const [currentIsCategory, setCurrentIsCategory] = React.useState<boolean>(true)
	const [currentItems, setCurrentItems] = React.useState<Item | Item[]>()

	const maxIncome = Math.max(...data?.Items.map((item: Item) => item.Income))

	const handleClickBubbleGrouped = (isCategory: boolean, items: Item | Item[]) => {
		setCurrentIsCategory(isCategory)
		setCurrentItems(items)
		setIsOpen(true)
	}

	return (
		<>
			<Modal {...{ isOpen, setIsOpen }}>
				{currentIsCategory ? (
					<ItemsListCategory items={currentItems as Item[]} />
				) : (
					<ItemsListChildren item={currentItems as Item} />
				)}
			</Modal>
			<div className='bubble_centered'>
				<img src={moneyIcon} alt='money icon' />
				<h3>{data?.IncomePercent}%</h3>
				<p>Income Achieved</p>
			</div>
			<div className='bubble_centered_border'></div>
			{data?.Items &&
				data?.Items.map((item: Item, index: number) => {
					if (index + 1 === positions.length) {
						return (
							<BubbleCategory
								onClick={() => handleClickBubbleGrouped(true, data?.Items.slice(index))}
								key={item.Name}
								isGroupBubble={true}
								{...{ index, item, maxIncome }}
							/>
						)
					} else if (index + 1 > positions.length) {
						return null
					}

					return (
						<React.Fragment key={item.Name}>
							<BubbleCategory {...{ index, item, maxIncome }} />
							{item.IncomeBreakdowns &&
								item?.IncomeBreakdowns.map((itemChild: ItemChild, indexChild: number) => {
									if (indexChild + 1 === positions[index]?.bubbleChildX.length) {
										return (
											<BubbleChild
												onClick={() => handleClickBubbleGrouped(false, item)}
												key={itemChild.Name}
												isGroupBubble={true}
												{...{ index, indexChild, itemChild }}
											/>
										)
									} else if (indexChild + 1 > (positions[index]?.bubbleChildX?.length || 0)) {
										return null
									}

									return <BubbleChild key={itemChild.Name} {...{ index, indexChild, itemChild }} />
								})}
						</React.Fragment>
					)
				})}
		</>
	)
}

export default Bubblechart
