import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

import LeftSide from './LeftSide'
import MiddleSide from './MiddleSide'
import RightSide from './RightSide'

import Loading from '../../components/Loading'

import Status from '../../shared/status'
import useAppSelector from '../../hooks/useAppSelector'
import { selectDatasetData, selectDatasetStatus } from '../../redux/slices/dataset/selectors'

import exampleData from '../../assets/data/example_data.json'
import type { Data, Dataset } from '../../redux/slices/dataset/types'

import '../../assets/styles/pages/dashboard/Dashboard.scss'

const Dashboard: React.FC = () => {
	const dataset = useAppSelector(selectDatasetData)
	const status = useAppSelector(selectDatasetStatus)

	const { pathname } = useLocation()

	const isLoaded = status === Status.LOADED
	const isUploadPage = pathname.split('/')[2] === 'uploaded'

	const [data, setData] = React.useState<Data>(exampleData as unknown as Data)
	const [currentYear, setCurrentYear] = React.useState<number | string>(data?.Years[0] as string)

	const currentDatasetByYear = data.Datasets.find(
		(d: Dataset) => String(d.Year) === String(currentYear)
	) as Dataset // Дадасет выбранного года

	React.useEffect(() => {
		if (isUploadPage) isLoaded && dataset && setData(dataset)
		else setData(exampleData as unknown as Data)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [status, pathname])

	if ((status === Status.UNSET || status === Status.ERROR) && isUploadPage) {
		return <Navigate to='/' />
	}

	return !isLoaded && isUploadPage ? (
		<Loading />
	) : (
		<div className='content'>
			<LeftSide data={currentDatasetByYear} years={data?.Years} {...{ currentYear, setCurrentYear }} />
			<MiddleSide data={currentDatasetByYear} />
			<RightSide data={currentDatasetByYear} />
		</div>
	)
}

export default Dashboard
