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

const SecondBubbleChart: React.FC<BubbleChartProps> = ({ data }) => {
	console.log(data?.Items)

	return (
		<>
			{/* <div className='main-bubble'>
				<h3>{data?.IncomePercent}%</h3>
				<p>Income Achieved</p>
			</div> */}
			<img
				className='center'
				src="{{ url_for('static',filename='Circle2.png') }}"
				style={{ position: 'absolute', width: '500px', height: '351px' }}
				alt='Circle'
			/>

			<div className='center'>
				<div className='item html'>
					<svg className='p' width='700' height='700' xmlns='http://www.w3.org/2000/svg'>
						<g>
							<circle
								className='circle_animation'
								r='140'
								cy='351'
								cx='351'
								stroke-width='49'
								stroke='rgba(0, 0, 0, 0.8)'
								fill='none'></circle>
						</g>
					</svg>
				</div>
			</div>

			<div className='center doughnut'>
				<div className='center doughnut2'></div>
			</div>

			<div
				className='center'
				style={{
					background: 'linear-gradient(#DC25FA 50%, #9947F7 64%)',
					borderRadius: '100%',
					width: '250px',
					height: '250px',
				}}>
				<div
					className='center'
					style={{
						background: 'rgba(0,0,0,0.6)',
						borderRadius: '100%',
						width: '251px',
						height: '251px',
					}}></div>
			</div>

			<div
				className='center'
				style={{
					background: 'linear-gradient(#DC25FA 50%, #9947F7 64%)',
					borderRadius: '100%',
					width: '180px',
					height: '180px',
				}}>
				<div
					className='center'
					style={{
						background: 'black',
						borderRadius: '100%',
						width: '120px',
						height: '120px',
						alignContent: 'center',
					}}>
					<div className='center'>
						<h2>main bubble</h2>
					</div>
					<div className='center' style={{ top: '65%', width: '15vw' }}>
						<p className='center' style={{ fontSize: '1.1vh' }}>
							Income Achieved
						</p>
					</div>
				</div>
			</div>

			{data?.Items &&
				data?.Items.map((item: Item, index: number) => {
					// const R = 30 * 10 // (n)px * 10
					// const radian = index * ((2 * Math.PI) / (data?.Items.length || 6)) - 0.5 * Math.PI
					// const x = R * Math.cos(radian)
					// const y = R * Math.sin(radian)
					//console.log(x, y)
					const t = [74, 66.5, 38, 16.5, 21, 58]
					const l = [50.7, 64.7, 61.5, 57.7, 38, 34]
					// const ll = [32, 51.8, 68, 73.5, 51.2, 32.5]
					// const tt = [16, 10.7, 33, 66.5, 83, 68]

					console.log(68 * (item.IncomePercentage / 9))
					console.log(33 * (item.IncomePercentage / 12))
					//console.log(68 * (1 + item.IncomePercentage / 100 / 9))
					//console.log(33 * (1 + item.IncomePercentage / 100 / 12))

					return (
						<>
							<div
								className='circle_value'
								style={{
									//top: `${74 + (-1) ** index * index * 7.5}vh`,
									//left: `${50.7 + (-1) ** index * index * 15}vw`,
									// top: `${(68.7 - index * 7) * (1 + item.IncomePercentage / 100 / 9)}vh`,
									// left: `${(50.7 + index * 15) * (1 + item.IncomePercentage / 100 / 12)}vh`,
									top: `${t[index]}vh`,
									left: `${l[index]}vw`,
									width: `${2.7 * (1 + (item.IncomePercentage / 100) * 4)}vw`,
									height: `${5 * (1 + (item.IncomePercentage / 100) * 4)}vh`,
									background: 'linear-gradient(120deg,  #7417BD 5%, #100D83 86%)',
								}}>
								<div
									className="{{ 'inner' * (income_value_max == 'Renting') }}"
									style={{ width: '100%', height: '100%' }}></div>
								<div className='center' style={{ top: '40%' }}>
									[ y = {t[index]} ] [x = [ {l[index]} ]] {item.Name}
								</div>
								<div className='center' style={{ top: '60%' }}>
									{item.IncomePercentage}
								</div>
							</div>
							<div
								className='circle_perc'
								//</>style={{ left: `${ll[index]}vw`, top: `${tt[index]}vh` }}>
								style={{
									top: `${68 * (item.IncomePercentage / 9)}vh`,
									left: `${33 * (item.IncomePercentage / 12)}vw`,
								}}>
								<div className='center'>{item.IncomePercentage}%</div>
							</div>
						</>
					)
				})}
		</>
	)
}

export default SecondBubbleChart
