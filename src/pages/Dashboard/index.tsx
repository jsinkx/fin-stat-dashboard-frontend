import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

import LeftSide from './LeftSide'
import MiddleSide from './MiddleSide'
import RightSide from './RightSide'

import Loading from '../../components/Loading'
import Modal from '../../components/Modal'

import Status from '../../shared/status'
import useAppSelector from '../../hooks/useAppSelector'
import { selectDatasetData, selectDatasetStatus } from '../../redux/slices/dataset/selectors'

import ModalContext from '../../components/Modal/ModalContext'

import exampleData from '../../assets/data/example_data.json'
import type { Data, Dataset } from '../../redux/slices/dataset/types'

import '../../assets/styles/pages/dashboard/Dashboard.scss'

const Dashboard: React.FC = () => {
	const dataset = useAppSelector(selectDatasetData)
	const status = useAppSelector(selectDatasetStatus)

	const { pathname } = useLocation()

	const isLoaded = status === Status.LOADED

	const [isOpen, setIsOpen] = React.useState<boolean>(false)
	const [modalChildComponent, setModalChildComponent] = React.useState<React.ReactNode>(<></>)

	const [data, setData] = React.useState<Data>(exampleData as unknown as Data)
	const [currentYear, setCurrentYear] = React.useState<number | string>(data?.Years[0] as string)

	const currentDatasetByYear = data.Datasets.find(
		(d: Dataset) => String(d.Year) === String(currentYear)
	) as Dataset // Дадасет выбранного года

	React.useEffect(() => {
		isLoaded && dataset && setData(dataset)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [status])

	if ((status === Status.UNSET || status === Status.ERROR) && pathname.split('/')[2] === 'uploaded') {
		return <Navigate to='/' />
	}

	return !isLoaded && pathname.split('/')[2] === 'uploaded' ? (
		<Loading />
	) : (
		<div className='content'>
			{isOpen && <Modal setIsOpen={setIsOpen}>{modalChildComponent}</Modal>}
			<ModalContext.Provider
				value={{
					isOpen: isOpen,
					setIsOpen,
					modalChildComponent,
					setModalChildComponent,
				}}>
				<LeftSide data={currentDatasetByYear} years={data?.Years} {...{ currentYear, setCurrentYear }} />
				<MiddleSide data={currentDatasetByYear} />
				<RightSide data={currentDatasetByYear} />
			</ModalContext.Provider>
		</div>
	)
}

export default Dashboard
