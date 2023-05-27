import React from 'react'

import closeIcon from '../../assets/images/close-icon.png'
import classes from './Modal.module.scss'

type ModalProps = {
	children: React.ReactNode
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal: React.FC<ModalProps> = ({ children, setIsOpen }) => {
	return (
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
	)
}

export default Modal
