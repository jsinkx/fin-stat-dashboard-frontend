import React from 'react'

import toDivide from '../../../utils/toDivide'

type IncomeStatisticProps = {
	TargetIncome: number
	RealIncome: number
}

const IncomeStatistic: React.FC<IncomeStatisticProps> = ({ TargetIncome, RealIncome }) => {
	return (
		<>
			<h1>{toDivide(TargetIncome)}</h1>
			<h1 className='real-income'>
				Real Income: <span> {toDivide(RealIncome)} </span>
			</h1>
		</>
	)
}

export default IncomeStatistic
