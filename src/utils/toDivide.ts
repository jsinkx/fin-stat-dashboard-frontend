const toDivide = (value: number) => String(value).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1,')

export default toDivide
