import React from 'react'

import positions from '../../../shared/positions'

import moneyIcon from '../../../assets/images/money-icon.png'

import BubbleChild from './BubbleChild'
import BubbleCategory from './BubbleCategory'

import UnitedList from '../../../components/UnitedList'
import ModalContext from '../../../components/Modal/ModalContext'

import toDivide from '../../../utils/toDivide'

import type { Dataset, Item, ItemChild } from '../../../redux/slices/dataset/types'

type BubblechartProps = {
	data: Dataset
}

const Bubblechart: React.FC<BubblechartProps> = ({ data }) => {
	const { setIsOpen, setModalChildComponent } = React.useContext(ModalContext)

	const maxIncome = Math.max(...data?.Items.map((item: Item) => item.Income))

	const handleClickBubbleCategoryGroup = (items: Item[]) => {
		setModalChildComponent(
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
		setIsOpen(true)
	}

	const handleClickBubbleChildGroup = (item: Item) => {
		setModalChildComponent(
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
		setIsOpen(true)
	}

	return (
		<>
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
								onClick={() => handleClickBubbleCategoryGroup(data?.Items.slice(index))}
								key={item.Name}
								isGroupBubble={true}
								{...{ index, item, maxIncome }}
							/>
						)
					} else if (index + 1 > positions.length) {
						return <React.Fragment key={item.Name}></React.Fragment>
					}

					return (
						<React.Fragment key={item.Name}>
							<BubbleCategory {...{ index, item, maxIncome }} />
							{item.IncomeBreakdowns &&
								item?.IncomeBreakdowns.map((itemChild: ItemChild, indexChild: number) => {
									if (indexChild + 1 === positions[index]?.bubbleChildX.length) {
										return (
											<BubbleChild
												onClick={() => handleClickBubbleChildGroup(item)}
												key={itemChild.Name}
												isGroupBubble={true}
												{...{ index, indexChild, itemChild }}
											/>
										)
									} else if (indexChild + 1 > (positions[index]?.bubbleChildX?.length || 0)) {
										return <></>
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
