import React from 'react'

interface IModalContext {
	isOpen: boolean
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
	modalChildComponent: React.ReactNode
	setModalChildComponent: React.Dispatch<React.SetStateAction<React.ReactNode>>
}

const ModalContext = React.createContext<IModalContext>({
	isOpen: false,
	setIsOpen: () => {},
	modalChildComponent: <></>,
	setModalChildComponent: () => {},
})

export default ModalContext
