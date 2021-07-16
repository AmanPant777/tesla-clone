import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import ModelS from './images/model-s.jpg'
import ModelX from './images/model-x.jpg'
import ModelY from './images/model-y.jpg'
import Model3 from './images/model-3.jpg'
import SolarP from './images/solar-panel.jpg'
import SolarR from './images/solar-roof.jpg'
import Acc from './images/accessories.jpg'
const Home = () => {
	return (
		<Container>
			<Section 
			title='Model S'
			description='Order Online for touchless delivery'
			backgroundImage={ModelS}
			leftbtntext='Customer Order'
			rightbtntext='Existing Inventory'/>
			<Section title='Model X'
			description='Order Online for touchless delivery'
			backgroundImage={ModelX}
			leftbtntext='Customer Order'
			rightbtntext='Existing Inventory'/>
			<Section title='Model 3'
			description='Order Online for touchless delivery'
			backgroundImage={Model3}
			leftbtntext='Customer Order'
			rightbtntext='Existing Inventory'/>
			<Section title='Model Y'
			description='Order Online for touchless delivery'
			backgroundImage={ModelY}
			leftbtntext='Customer Order'
			rightbtntext='Existing Inventory'/>
			<Section title='Model S'
			description='Order Online for touchless delivery'
			backgroundImage={ModelS}
			leftbtntext='Customer Order'
			rightbtntext='Existing Inventory'/>
			<Section title='Solar Panel'
			description='Money Back Guarantee'
			backgroundImage={SolarP}
			leftbtntext='Order Now'
			rightbtntext='Learn More'/>
			<Section title='Solar Roof'
			description='Money Back Guarantee'
			backgroundImage={SolarR}
			leftbtntext='Order Now'
			rightbtntext='Learn More'/>
			<Section title='Accessories'
			description='Give it a try'
			backgroundImage={Acc}
			leftbtntext='Order Now'
			/>
		</Container>
	)
}
export default Home

const Container=styled.div`
height:100vh;
`