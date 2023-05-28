import React from 'react'

import Areachart from './Areachart'
import IncomeStatistic from './IncomeStatistic'

import UnitedList from '../../../components/UnitedList'
import ModalContext from '../../../components/Modal/ModalContext'

type LeftSideProps = {
	data: any
	years: string[]
	currentYear: string
	setCurrentYear: React.Dispatch<React.SetStateAction<string>>
}

const LeftSide: React.FC<LeftSideProps> = ({ data, years, currentYear, setCurrentYear }) => {
	const { setIsOpen, setModalChildComponent } = React.useContext(ModalContext)

	const handleClickAreachart = () => {
		setModalChildComponent(<Areachart isInsideModal={true} dataByMonths={data?.ByMonths} />)
		setIsOpen(true)
	}

	return (
		<aside className='left-side'>
			<h4> Income Sources </h4>
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
				<Areachart onClick={handleClickAreachart} dataByMonths={data?.ByMonths} />
				<UnitedList title="Quantity of Item's" items={data?.Items} />
			</div>
		</aside>
	)
}

export default LeftSide
