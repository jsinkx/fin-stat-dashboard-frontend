import React from 'react'

import QuantityItems from './QuantityItems'
import IncomeStatistic from './IncomeStatistic'
import Areachart from './Areachart'

type LeftSideProps = {
	data: any
	years: string[]
	currentYear: string
	setCurrentYear: React.Dispatch<React.SetStateAction<string>>
}

const LeftSide: React.FC<LeftSideProps> = ({ data, years, currentYear, setCurrentYear }) => {
	return (
		<aside className='left-side'>
			<h4> Income Source </h4>
			<p>
				Grand total of income, and their breakdowns showing the achievements percentage and highlight for most
				valuable source, Marketing strategies, and operating profit.
			</p>
			<div>
				<ul>
					{years &&
						years.map((year: string) => (
							<li
								onClick={() => setCurrentYear(year)}
								className={`li__year ${currentYear === year ? 'li__year_active' : ''}`}
								key={year}>
								{year}
							</li>
						))}
				</ul>
				<h2> Financial Statistics </h2>
				<IncomeStatistic TargetIncome={data?.TargetIncome} RealIncome={data?.RealIncome} />
				{/* TODO: Add opening AreaChart window on click */}
				<Areachart dataByMonths={data?.ByMonths} />
				<QuantityItems items={data?.Items} />
			</div>
		</aside>
	)
}

export default LeftSide
