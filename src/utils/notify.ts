import { Id, ToastOptions, toast } from 'react-toastify'

import Colors from '../shared/colors'

type NotifyFunc = (success: boolean, message: string) => Id

const notify: NotifyFunc = (success, message) => {
	return (success ? toast.success : toast.error)(message, {
		position: 'top-center',
		autoClose: false,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'dark',
		style: { border: `1.5px solid ${success ? Colors.SUCCESS : Colors.ERROR}` },
	} as unknown as ToastOptions<{}>)
}

export default notify
