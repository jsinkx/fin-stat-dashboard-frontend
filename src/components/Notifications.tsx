import React from 'react'
import { ToastContainer } from 'react-toastify'

const Notifications: React.FC = () => {
	return (
		<ToastContainer
			position='top-center'
			autoClose={false}
			hideProgressBar={false}
			newestOnTop
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme='light'
			style={{ width: '800px' }}
		/>
	)
}

export default Notifications
