import React from 'react'
import toDivide from '../../../utils/toDivide'

type Items = {
	Name: string
	Income: number
	IncomePercentage: number
	Quantity: number
	QuantityPercentage: number
}

type QuantityItemsProps = {
	items: Items[]
}

const QuantityItems: React.FC<QuantityItemsProps> = ({ items }) => {
	return (
		<>
			<h3> Quantity of Item's</h3>
			<ul className='quantity-items'>
				{items &&
					items.map((item) => (
						<li key={item.Name} className='quantity-item'>
							<span className='quantity-item_name'> {item.Name} </span>
							<span className='quantity-item_percentage'> {item.QuantityPercentage}% </span>
							<span className='quantity-item_value'> {toDivide(item.Quantity)} </span>
						</li>
					))}
			</ul>
		</>
	)
}

export default QuantityItems
