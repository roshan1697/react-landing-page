import React from 'react'
import MainSection from './MainSection'
import { dataObjOne,  dataObjThree, } from './Data'


function Services() {
	return (
		<>
			
      <MainSection {...dataObjOne} />
      <MainSection {...dataObjThree} />
    </>
	)
}

export default Services
