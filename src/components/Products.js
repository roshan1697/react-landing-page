import React from 'react'
import MainSection from './MainSection'
import { dataObjOne, dataObjTwo } from './Data'


function Products() {
	return (
		<>
			<MainSection {...dataObjOne} />
			<MainSection {...dataObjTwo} />
		</>
	)
}

export default Products
