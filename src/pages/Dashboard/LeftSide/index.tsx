import React from 'react'

import AreaChart from './AreaChart'
import QuantityItems from './QuantityItems'
import IncomeStatistic from './IncomeStatistic'

type LeftSideProps = {
	data: any
}

const LeftSide: React.FC<LeftSideProps> = ({ data }) => {
	const [currentYear, setCurrentYear] = React.useState<string>(data?.Years[0] as string)

	const currentDatasetByYear = data.Datasets.find((d: any) => d.Year === currentYear) // Дадасет выбранного года

	return (
		<aside className='left-side'>
			<h4> Income Source </h4>
			<p>
				Grand total of income, and their breakdowns showing the achievements percentage and highlight for most
				valuable source, Marketing strategies, and operating profit.
			</p>
			<div>
				<ul>
					{data?.Years &&
						data?.Years.map((year: string) => (
							<li
								onClick={() => setCurrentYear(year)}
								className={`li__year ${currentYear === year ? 'li__year_active' : ''}`}
								key={year}>
								{year}
							</li>
						))}
				</ul>
				<h2> Financial Statistics </h2>
				<IncomeStatistic
					TargetIncome={currentDatasetByYear?.TargetIncome}
					RealIncome={currentDatasetByYear?.RealIncome}
				/>
				{/* TODO: Add opening AreaChart window on click */}
				<AreaChart dataByMonths={currentDatasetByYear?.ByMonths} />
				<QuantityItems items={currentDatasetByYear?.Items} />
			</div>
		</aside>
	)
}

export default LeftSide
