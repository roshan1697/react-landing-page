import React from 'react'
import MainSection from './MainSection'
import { dataObjOne, dataObjTwo, dataObjThree, dataObjFour } from './Data'


function Home() {
	return (
		<>
			<MainSection {...dataObjOne} />
			<MainSection {...dataObjThree} />
      <MainSection {...dataObjTwo}/>
      <MainSection {...dataObjFour}/>
		</>
	)
}

export default Home
