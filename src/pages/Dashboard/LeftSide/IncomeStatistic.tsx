import React from 'react'

import toDivide from '../../../utils/toDivide'

type IncomeStatisticProps = {
	TargetIncome: number
	RealIncome: number
}

const IncomeStatistic: React.FC<IncomeStatisticProps> = ({ TargetIncome, RealIncome }) => {
	return (
		<>
			<h2 className='target-income'>{toDivide(TargetIncome)}</h2>
			<h2 className='real-income'>
				Real Income: <span> {toDivide(RealIncome)} </span>
			</h2>
		</>
	)
}

export default IncomeStatistic
