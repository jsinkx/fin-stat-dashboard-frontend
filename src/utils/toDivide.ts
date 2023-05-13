const toDivide = (value: number) => {
	return String(value).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1,')
}

export default toDivide
