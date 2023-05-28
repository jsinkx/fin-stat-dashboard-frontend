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
		bubbleChildX: [49.5, 52.5, 50.5, 43.5, 42.5, 38],
		bubbleChildY: [7, 19, 29.5, 36.5, 5, 13.5],
		bubbleChildLineX: [42, 39.2, 45, 45, 40.5, 38],
		bubbleChildLineY: [18, 16, 24, 29, 29, 22],
		bubbleChildLineW: [11, 10, 10, 7, 10, 10],
		bubbleChildLineD: [-50, -276, -200, 30, 280, -320],
	},
	{
		bubbleCategoryX: 31.7,
		bubbleCategoryY: 5,
		bubbleCategoryLineX: 27.8,
		bubbleCategoryLineY: 20,
		bubbleCategoryLineW: 11,
		bubbleCategoryLineD: -78,
		bubbleChildX: [36],
		bubbleChildY: [-2],
		bubbleChildLineX: [34],
		bubbleChildLineY: [3],
		bubbleChildLineW: [5],
		bubbleChildLineD: [300],
	},
	{
		bubbleCategoryX: 20,
		bubbleCategoryY: 9,
		bubbleCategoryLineX: 20,
		bubbleCategoryLineY: 22,
		bubbleCategoryLineW: 11,
		bubbleCategoryLineD: -130,
		bubbleChildX: [12, 11, 21],
		bubbleChildY: [17, 2, -1],
		bubbleChildLineX: [12, 12, 19.8],
		bubbleChildLineY: [10, 19, 8],
		bubbleChildLineW: [11, 9, 6],
		bubbleChildLineD: [30, -6, 78],
	},
	{
		bubbleCategoryX: 26.76,
		bubbleCategoryY: 58,
		bubbleCategoryLineX: 25,
		bubbleCategoryLineY: 50,
		bubbleCategoryLineW: 11,
		bubbleCategoryLineD: 100,
		bubbleChildX: [22, 34, 28.5, 36],
		bubbleChildY: [73, 73, 78, 60],
		bubbleChildLineX: [23, 27, 25.5],
		bubbleChildLineY: [70, 69, 71, 64],
		bubbleChildLineW: [7, 9, 8, 8],
		bubbleChildLineD: [140, -140, 87, 170],
	},
	{
		bubbleCategoryX: 41,
		bubbleCategoryY: 54,
		bubbleCategoryLineX: 29,
		bubbleCategoryLineY: 48,
		bubbleCategoryLineW: 17,
		bubbleCategoryLineD: 45,
		bubbleChildX: [42, 51, 52],
		bubbleChildY: [73, 69, 54],
		bubbleChildLineX: [40.1, 45, 46],
		bubbleChildLineY: [70, 66, 58],
		bubbleChildLineW: [7, 7, 7],
		bubbleChildLineD: [100, -140, 170],
	},
	{
		bubbleCategoryX: 13,
		bubbleCategoryY: 39,
		bubbleCategoryLineX: 13,
		bubbleCategoryLineY: 42,
		bubbleCategoryLineW: 17,
		bubbleCategoryLineD: 160,
		bubbleChildX: [8, 7, 15.7],
		bubbleChildY: [50, 36, 30],
		bubbleChildLineX: [9, 10, 13.2],
		bubbleChildLineY: [41, 49, 41],
		bubbleChildLineW: [7, 7, 7],
		bubbleChildLineD: [21, 340, 273],
	},
	{
		bubbleCategoryX: 19,
		bubbleCategoryY: 52,
		bubbleCategoryLineX: 17,
		bubbleCategoryLineY: 49,
		bubbleCategoryLineW: 17,
		bubbleCategoryLineD: 130,
		bubbleChildX: [],
		bubbleChildY: [],
		bubbleChildLineX: [],
		bubbleChildLineY: [],
		bubbleChildLineW: [],
		bubbleChildLineD: [],
	},
]

export default positions
