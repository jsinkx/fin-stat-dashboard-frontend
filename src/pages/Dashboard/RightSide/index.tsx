import React from 'react'

import Barchart from './Barchart'
import Doughnutchart from './Doughnutchart'

import ModalContext from '../../../components/Modal/ModalContext'

import toDivide from '../../../utils/toDivide'

import avgIcon from '../../../assets/images/avg-x-icon.png'

import type { Dataset } from '../../../redux/slices/dataset/types'

type RightSideProps = {
	data: Dataset
}

const RightSide: React.FC<RightSideProps> = ({ data }) => {
	const { setIsOpen, setModalChildComponent } = React.useContext(ModalContext)

	const handleClickBarchart = () => {
		setModalChildComponent(<Barchart isInsideModal={true} dataByMonths={data?.ByMonths} />)
		setIsOpen(true)
	}

	return (
		<article className='right-side'>
			<div className='block block-avg'>
				<img src={avgIcon} alt='avg icon' />
				<h2 className='value'>{toDivide(data.AverageIncome)}</h2>
				<p> Average </p>
				<p>
					<span>Monthly income</span>
				</p>
			</div>
			<div className='block block-profit'>
				<h2>
					Operating
					<br />
					<span>Profits</span>
				</h2>

				<Barchart onClick={handleClickBarchart} dataByMonths={data.OperatingProfits.ByMonths} />

				<p className='value'>{toDivide(data.OperatingProfits.Total)}</p>
			</div>
			<div className='block block-marketing'>
				<h2>B2B</h2>
				<p className='value'>{toDivide(data.MarketingStrategies.B2B[0])}</p>
				<p>{data.MarketingStrategies.B2B[1]}%</p>
				<div className='chart'>
					<Doughnutchart marketingData={data.MarketingStrategies} />
				</div>
				<p>{data.MarketingStrategies.B2C[1]}%</p>
				<p className='value'>{toDivide(data.MarketingStrategies.B2C[0])}</p>
				<h2>B2C</h2>
			</div>
		</article>
	)
}

export default RightSide
