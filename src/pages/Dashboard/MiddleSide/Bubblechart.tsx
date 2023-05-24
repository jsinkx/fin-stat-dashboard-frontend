import React from 'react'

import toDivide from '../../../utils/toDivide'

import positions from '../../../shared/positions'

import moneyIcon from '../../../assets/images/money-icon.png'

type Item = {
	Name: string
	Income: number
	IncomePercentage: number
	IncomeBreakdowns?: Item[]
}

type BubblechartProps = {
	data: any
}

// This chart ONLY for static (example) data
const Bubblechart: React.FC<BubblechartProps> = ({ data }) => {
	const maxIncome = Math.max(...data?.Items.map((item: Item) => item.Income))

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
					const size = 6 * (0.8 + item.IncomePercentage ** 1.35 / 220)

					return (
						<React.Fragment key={item.Name}>
							<div
								className='bubble_category'
								style={{
									left: `${positions[index]?.bubbleCategoryX}vw`,
									top: `${(positions[index]?.bubbleCategoryY || 10) / 2}vw`,
									background: `linear-gradient(80deg, ${
										item.Income >= maxIncome
											? '#d40f56 23%, #701063 50%, #0c1097 100%)'
											: 'rgba(108,41,176, 1), rgba(20,17,124, 1))'
									}`,
									width: `${item.Income >= maxIncome ? size + 0.8 : size}vw`,
									height: `${item.Income >= maxIncome ? size + 0.8 : size}vw`,
									boxShadow: item.Income >= maxIncome ? '0 0 30px #d61059, inset 0 0 1px #0c1097' : 'none',
								}}>
								<p>{toDivide(item.Income)}</p>
								<p>{item.Name}</p>
								<p className='income-percentage'>{item.IncomePercentage}%</p>
							</div>
							<div
								className='line'
								style={{
									left: `${positions[index]?.bubbleCategoryLineX}vw`,
									top: `${(positions[index]?.bubbleCategoryLineY || 10) / 2}vw`,
									transform: `rotate(${positions[index]?.bubbleCategoryLineD}deg)`,
									width: `${positions[index]?.bubbleCategoryLineW}vw`,
								}}></div>
							{item.IncomeBreakdowns &&
								item?.IncomeBreakdowns.map((itemChild: Item, indexChild: number) => {
									return (
										<React.Fragment key={itemChild.Name}>
											<div
												key={itemChild.Name}
												className='bubble_child'
												style={{
													left: `${positions[index]?.bubbleChildX[indexChild]}vw`,
													top: `${(positions[index]?.bubbleChildY[indexChild] || 10) / 2}vw`,
												}}>
												<p className='IncomePercentage'>{itemChild?.IncomePercentage}%</p>
												<p className='IncomeValues'>
													{itemChild.Name} <br /> {toDivide(itemChild.Income)}
												</p>
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
								})}
						</React.Fragment>
					)
				})}
		</>
	)
}

export default Bubblechart
