import React from 'react'

import Modal from '../../../components/Modal'
import Areachart from './Areachart'
import IncomeStatistic from './IncomeStatistic'

import UnitedList from '../../../components/UnitedList'
import { useLocation } from 'react-router-dom'

import { Dataset } from '../../../redux/slices/dataset/types'

type LeftSideProps = {
	data: Dataset
	years: number[] | string[]
	currentYear: number | string
	setCurrentYear: React.Dispatch<React.SetStateAction<number | string>>
}

const LeftSide: React.FC<LeftSideProps> = ({ data, years, currentYear, setCurrentYear }) => {
	const { pathname } = useLocation()

	const [isOpen, setIsOpen] = React.useState<boolean>(false)

	React.useEffect(() => {
		setCurrentYear(years[0] as string)
	}, [pathname])

	return (
		<>
			<Modal {...{ isOpen, setIsOpen }}>
				<Areachart isInsideModal={true} dataByMonths={data?.ByMonths} />
			</Modal>
			{React.useMemo(
				() => (
					<aside className='left-side'>
						<h4> Income Sources </h4>
						<p>
							Grand total of income, and their breakdowns showing the achievements percentage and highlight
							for most valuable source, Marketing strategies, and operating profit.
						</p>
						<div>
							<ul>
								{years &&
									years.map((year: string | number) => (
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
							<Areachart onClick={() => setIsOpen(true)} dataByMonths={data?.ByMonths} />
							<UnitedList title="Quantity of Item's" items={data?.Items} />
						</div>
					</aside>
				),
				// eslint-disable-next-line react-hooks/exhaustive-deps
				[data, currentYear]
			)}
		</>
	)
}

export default LeftSide
