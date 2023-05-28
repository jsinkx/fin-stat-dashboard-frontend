import React from 'react'
import { ToastContainer } from 'react-toastify'

const Notifications: React.FC = () => {
	return (
		<ToastContainer
			position='top-center'
			autoClose={5000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme='dark'
			style={{ width: '800px', zIndex: '999999999999' }}
		/>
	)
}

export default Notifications
