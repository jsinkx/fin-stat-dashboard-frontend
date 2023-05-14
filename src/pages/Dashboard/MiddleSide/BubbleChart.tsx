import React from 'react'

type Item = {
	Name: string
	Income: number
	IncomePercentage: number
	IncomeBreakdowns?: Item[]
}

type BubbleChartProps = {
	data: any
}

const BubbleChart: React.FC<BubbleChartProps> = ({ data }) => {
	const len = 6
	const arc = 2 * Math.PI * (1 / len) // Расстояние между элементами
	const radius = 55
	// const d = ['Some data1', 'Some data2', 'Some data3', 'Some data4', 'Some data5', 'Some data6']

	const avg = data?.Items?.reduce((acc: number, item: Item) => acc + item.Income, 0) / data?.Items.length

	return (
		<>
			{/* <div className='main-bubble'>
				<h3>{data?.IncomePercent}%</h3>
				<p>Income Achieved</p>
			</div> */}
			<div className='bubbles'>
				<div className='circular-menu'>
					{data?.Items &&
						data?.Items?.map((item: Item, i: number) => {
							let angle = i * arc // Угол элемента
							let x = (1 + (item.IncomePercentage * 2) / 100) * radius * Math.cos(angle)
							let y = (1 + (item.IncomePercentage * 3) / 100) * radius * Math.sin(angle)

							const children: any = []

							item?.IncomeBreakdowns &&
								item?.IncomeBreakdowns?.map((childItem: Item, ci: number) => {
									// // const dlen = item?.IncomeBreakdowns?.length || 1 // Количество детей
									// //const darc = 2 * Math.PI * (1 / dlen)
									// const dradius = radius * 3
									// let dangle = ((ci + (-1) ** (i + 1) * i - 1) * arc) / 2 // ((ci - i - 1) * arc) / 2
									// let dx = (-1) ** i * dradius * Math.cos(dangle / 2)
									// let dy = dradius * Math.sin(dangle / 2)
									// console.log(item?.IncomeBreakdowns)
									// //if (i === 3) {
									// //console.log(`${item.Name} > ${childItem.Name}`, dx + x + 50, dy + y + 50)
									// //console.log(angle, dangle)

									const dlen = item?.IncomeBreakdowns?.length || 1 // Количество детей
									const darc = 2 * Math.PI * (1 / (dlen + 10)) // Расстояние между элементами
									const dangle = (ci + 0 - 2 + i ** 2) * darc // Угол элемента // здесь поворот завис от i
									const dradius = 40
									let dx = (1 + (item.IncomePercentage * 2) / 100) * dradius * Math.cos(dangle)
									let dy = (1 + (item.IncomePercentage * 3) / 100) * dradius * Math.sin(dangle)
									console.log(item?.IncomeBreakdowns)

									children.push(
										<div
											className='bubble-child'
											//style={{ left: `${50 + dx * (ci + 3)}%`, top: `${50 + dy * (ci + 3)}%` }}
											style={{
												width: `${(1 + item.IncomePercentage / 100) * 80}`,
												height: `${(1 + item.IncomePercentage / 100) * 80}`,
												left: `${50 + x * 1.4 + dx}%`,
												top: `${50 + y * 1.5 + dy}%`,
											}}
											key={childItem.Name}>
											<p
												className='bubble-child_name'
												style={{
													transform: `translate(${(-1) ** i * 70}px, 80px)`,
												}}>
												{childItem?.Name}
											</p>
											<p className='bubble-child_value'>{childItem?.IncomePercentage}%</p>
										</div>
									)
									//}
								})

							return (
								<React.Fragment key={item.Name}>
									<div
										className='circular-menu__item'
										style={{
											left: `${50 + x}%`,
											top: `${50 + y}%`,
											background: `linear-gradient(to right, ${
												item.Income > avg ? 'rgba(222,17,92, 1)' : 'rgba(108,41,176, 1)'
											}, rgba(20,17,124, 1)`,
											width: `${80 * (1 + item.IncomePercentage ** 1.1 / 85)}px`,
											height: `${80 * (1 + item.IncomePercentage ** 1.1 / 85)}px`,
										}}>
										{item.Name} <br />
										{item.IncomePercentage}%
									</div>
									{(item?.IncomeBreakdowns?.length || 0) > 0 && (
										<div
											className='circular-menu__item'
											style={{
												left: `${50 + x * 1.4}%`,
												top: `${50 + y * 1.5}%`,
												backgroundColor: 'initial',
												border: '6px solid #A6FEF8',
												width: '63px',
												height: '63px',
												boxSizing: 'border-box',
												paddingTop: '1%',
											}}>
											{item.IncomePercentage}%
										</div>
									)}

									{children?.map((t: any) => t)}
								</React.Fragment>
							)
						})}
					<div className='circular-menu__button'>{data?.IncomePercent}%</div> {/* mid */}
				</div>
			</div>
		</>
	)
}

export default BubbleChart
