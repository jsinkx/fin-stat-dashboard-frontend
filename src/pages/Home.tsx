import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import buildPic from '../assets/images/Untitled-1.png'
import analyticsPic from '../assets/images/Sales Analytics.png'

import Status from '../shared/status'
import useAppSelector from '../hooks/useAppSelector'
import { selectDatasetStatus } from '../redux/slices/dataset/selectors'
import { fetchDataset } from '../redux/slices/dataset/slice'
import useAppDispatch from '../hooks/useAppDispatch'

import notify from '../utils/notify'

import '../assets/styles/pages/Home.scss'

const Home: React.FC = () => {
	const dispatch = useAppDispatch()
	const status = useAppSelector(selectDatasetStatus)

	const navigate = useNavigate()

	const handleFileChange = (event: any) => {
		const file = event.target.files[0]
		if (
			file !== undefined &&
			(file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
				file.type === 'application/vnd.ms-excel')
		) {
			const formData = new FormData()

			formData.append('file', file as Blob)

			dispatch(fetchDataset(formData))

			navigate('/dashboard/uploaded')
		} else {
			notify(false, 'Only xlsx and xls format are supported!')
		}
	}

	return (
		<>
			<nav>
				<div className='upload-file__block'>
					<img src={buildPic} alt='build pic' />
					<div className='upload-file__block_action'>
						<h2> Start use our dashboard</h2>
						<label className='input-file'>
							<input type='file' name='file' accept='.xls,.xlsx' onChange={handleFileChange} />
							<span>📄 Upload File</span>
						</label>
					</div>
				</div>
				<div className='example-data__block'>
					<img src={analyticsPic} alt='analytics pic' />
					<h2> Look at</h2>
					<NavLink to='/dashboard'>👀 Example Data</NavLink>
					{status === Status.LOADED && <NavLink to='/dashboard/uploaded'>📊 Already uploaded</NavLink>}
				</div>
			</nav>
		</>
	)
}

export default Home
