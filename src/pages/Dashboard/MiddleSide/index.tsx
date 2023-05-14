import React from 'react'
import BubbleChart from './BubbleChart'
// import SecondBubbleChart from './SecondBubbleChart'

// type Item = {
// 	Name: string
// 	Income: number
// 	IncomePercentage: number
// 	IncomeBreakdowns?: Item[]
// }

type MiddleSideProps = {
	data: any
}

// const recursiveBubbles = (i: Item) => {
// 	// index: number, count?: number, windowSize?: any
// 	// const innerWidth = windowSize?.innerWidth
// 	// const innerHeight = windowSize?.innerHeight
// 	const r: any = []
// 	if (i?.IncomeBreakdowns) {
// 		i?.IncomeBreakdowns?.forEach((ii: Item) => {
// 			r.push(
// 				<li>
// 					{ii?.Name} | {ii?.IncomePercentage}%
// 				</li>
// 			)
// 		})
// 	}

// 	const R = 30 * 10 // (n)px * 10
// 	const radian = index * ((2 * Math.PI) / (count || 6)) - 0.5 * Math.PI
// 	const x = R * Math.cos(radian)
// 	const y = R * Math.sin(radian)
// =
// 	const bubbleStyle = {
// 		position: 'relative',
// 		right: `${x}px`,
// 		bottom: `${y}px`,
// 	} as React.StyleHTMLAttributes<string>

//  style={bubbleStyle}
// 	return (
// 		<>
// 			<div className='bubble'>
// 				<h3>{i?.Name} </h3>
// 				<p>{i?.IncomePercentage}%</p>
// 			</div>
// 			{/*}
// 			<ul>
// 				<li> {i?.IncomePercentage}% </li> <ul> {r} </ul>
// 			</ul>
// 	*/}
// 		</>
// 	)
// }
// const getWindowSize = () => {
// 	const { innerWidth, innerHeight } = window
// 	return { innerWidth, innerHeight }
// }

const MiddleSide: React.FC<MiddleSideProps> = ({ data }) => {
	// console.log('main-bubble', data?.IncomePercent)
	// console.log('bubble items', data?.Items)
	// Income value off bubble and name [A]
	// Next bubble percent IncomePercentage [B]
	// Next bubble after [B] IncomeBreakdowns [C]

	// const a = (i: Item, c: number) => {
	// 	console.log(`[${c}] (${i?.Name} | ${i?.Income}) ->`, `(${i?.IncomePercentage}) ->`)
	// 	c += 1
	// 	i?.IncomeBreakdowns?.forEach((ii: Item) => {
	// 		a(ii, c)
	// 		c += 1
	// 	})
	//}

	// data?.Items?.forEach((i: Item) => {
	// 	a(i, 1)
	// })

	// const [windowSize, setWindowSize] = React.useState<any>(getWindowSize())

	// React.useEffect(() => {
	// 	function handleWindowResize() {
	// 		setWindowSize(getWindowSize())
	// 	}

	// 	window.addEventListener('resize', handleWindowResize)

	// 	return () => {
	// 		window.removeEventListener('resize', handleWindowResize)
	// 	}
	// }, [])

	return (
		<div className='middle-side'>
			<BubbleChart data={data} />
			{/* <SecondBubbleChart data={data} /> */}

			{/* <ul> */}

			{/* {data?.Items &&
					data?.Items?.map((i: Item) => {
						//console.log(recursiveBubbles(i, index))
						// return recursiveBubbles(i, index, data?.Items.length, windowSize)
						return recursiveBubbles(i)
					})} */}
			{/* </ul> */}
		</div>
	)
}

export default MiddleSide
