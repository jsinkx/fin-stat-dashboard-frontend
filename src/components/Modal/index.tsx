import React from 'react'

import closeIcon from '../../assets/images/icons/close-icon.png'
import classes from './Modal.module.scss'

type ModalProps = {
	isOpen: boolean
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
	children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, setIsOpen, children }) => {
	const handleKeyPress = (event: KeyboardEvent) => {
		if (event.code === 'Escape') {
			setIsOpen(false)
		}
	}
	React.useEffect(() => {
		if (isOpen === false) return

		window.addEventListener('keydown', handleKeyPress, { once: true })
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOpen])

	return isOpen ? (
		<div className={classes.modal} onClick={() => setIsOpen(false)}>
			<div className={classes.modal_window} onClick={(event) => event.stopPropagation()}>
				<header>
					<button onClick={() => setIsOpen(false)}>
						<img src={closeIcon} alt='[x]' />
					</button>
				</header>
				{children}
			</div>
		</div>
	) : null
}

export default Modal
