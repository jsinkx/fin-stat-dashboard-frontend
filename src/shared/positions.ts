type PositionsType = {
	bubbleCategoryX: number // left
	bubbleCategoryY: number // top
	bubbleCategoryLineX: number // left
	bubbleCategoryLineY: number // top
	bubbleCategoryLineW: number // width
	bubbleCategoryLineD: number // degree
	bubbleChildX: number[] // array of left pos, value index = child index
	bubbleChildY: number[] // array of top pos, value index = child index
	bubbleChildLineX: number[] // array of left line pos, value index = child line index
	bubbleChildLineY: number[] // array of top line pos, value index = child line  index
	bubbleChildLineW: number[] // array of width line pos, value index = child line index
	bubbleChildLineD: number[] // array of degrees line pos, value index = child line index
}

const positions: PositionsType[] = [
	{
		bubbleCategoryX: 42,
		bubbleCategoryY: 18,
		bubbleCategoryLineX: 33,
		bubbleCategoryLineY: 31,
		bubbleCategoryLineW: 11,
		bubbleCategoryLineD: -30,
		bubbleChildX: [49.5, 52.5, 50.5, 43.5, 42.5],
		bubbleChildY: [7, 19, 29.5, 36.5, 5],
		bubbleChildLineX: [42, 39.2, 45, 45, 40.5],
		bubbleChildLineY: [18, 16, 24, 29, 29],
		bubbleChildLineW: [11, 10, 10, 7, 10],
		bubbleChildLineD: [-50, -276, -200, 30, 280],
	},
	{
		bubbleCategoryX: 32,
		bubbleCategoryY: 5,
		bubbleCategoryLineX: 28,
		bubbleCategoryLineY: 20,
		bubbleCategoryLineW: 11,
		bubbleCategoryLineD: -70,
		bubbleChildX: [],
		bubbleChildY: [],
		bubbleChildLineX: [],
		bubbleChildLineY: [],
		bubbleChildLineW: [],
		bubbleChildLineD: [],
	},
	{
		bubbleCategoryX: 20,
		bubbleCategoryY: 9,
		bubbleCategoryLineX: 20,
		bubbleCategoryLineY: 22,
		bubbleCategoryLineW: 11,
		bubbleCategoryLineD: -130,
		bubbleChildX: [12, 11],
		bubbleChildY: [17, 2],
		bubbleChildLineX: [12, 12],
		bubbleChildLineY: [10, 19],
		bubbleChildLineW: [11, 9],
		bubbleChildLineD: [30, -6],
	},
	{
		bubbleCategoryX: 26,
		bubbleCategoryY: 58,
		bubbleCategoryLineX: 25,
		bubbleCategoryLineY: 50,
		bubbleCategoryLineW: 11,
		bubbleCategoryLineD: 100,
		bubbleChildX: [22, 34, 28.5],
		bubbleChildY: [73, 73, 78],
		bubbleChildLineX: [23, 30, 25.5],
		bubbleChildLineY: [70, 72.5, 71],
		bubbleChildLineW: [7, 7, 8],
		bubbleChildLineD: [140, -140, 87],
	},
	{
		bubbleCategoryX: 41,
		bubbleCategoryY: 54,
		bubbleCategoryLineX: 29,
		bubbleCategoryLineY: 48,
		bubbleCategoryLineW: 17,
		bubbleCategoryLineD: 45,
		bubbleChildX: [42, 51],
		bubbleChildY: [73, 69],
		bubbleChildLineX: [40.1, 45],
		bubbleChildLineY: [70, 66],
		bubbleChildLineW: [7, 7],
		bubbleChildLineD: [100, -140],
	},
	{
		bubbleCategoryX: 13,
		bubbleCategoryY: 39,
		bubbleCategoryLineX: 13,
		bubbleCategoryLineY: 42,
		bubbleCategoryLineW: 17,
		bubbleCategoryLineD: 160,
		bubbleChildX: [9, 7],
		bubbleChildY: [51, 36],
		bubbleChildLineX: [9, 10],
		bubbleChildLineY: [41, 51],
		bubbleChildLineW: [7, 7],
		bubbleChildLineD: [23, 340],
	},
]

export default positions
