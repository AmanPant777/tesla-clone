import React,{useState} from 'react'
import Logo from './images/logo.svg'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {SelectCars} from '../features/car/CarSlics'
import {useSelector} from 'react-redux'
const Header = () => {
 const [BurgerStatus,setBurger]=useState(false)
 const cars=useSelector(SelectCars)
 console.log(cars)
	return (
		<Container>
		  <a>
			  <img src={Logo} alt="Logo" />
		  </a>
		  <Menu>
			  {cars&&cars.map((car,index)=>{
			return	 (<a key={index} href="">{car}</a>)
			  })}	  
		  </Menu>
		  <RightMenu>
			  <a href="#">Shop</a>
			  <a href="#">Tesla Account</a>
			  <CustomMenu onClick={()=>setBurger(true)}/>
		  </RightMenu>
		  <BurgerNav show={BurgerStatus}>
			  <CloseWrapper>
				  <CustomClose onClick={()=>setBurger(false)}/>
			  </CloseWrapper>
			  {cars&&cars.map((car,index)=><li><a href="#">{car}</a></li>)}
			  <li><a href="#">Existing Inventory</a></li>
			  <li><a href="#">Used Inventory</a></li>
			  <li><a href="#">Trade-in</a></li>
			  <li><a href="#">Cybertruck</a></li>
		  </BurgerNav>
		</Container>
	)
}

export default Header

const Container=styled.div`
min-height: 60px;position:fixed;
align-items: center;display:flex;padding:0 20px;
top: 0;left:0;right:0;
justify-content: space-between;
z-index: 1;
`
const Menu=styled.div`
display: flex;
align-items:center;
flex: 1;
justify-content: center;
a{
	font-weight: 600;
	text-transform: uppercase;
	padding: 0 10px;
	text-decoration: none;
}
@media (max-width:786px){
	display: none;
}
`
const RightMenu=styled.div`
display: flex;
align-items: center;
a {
	font-weight: 600;
	text-transform: uppercase;
	margin-right: 10px;
}
`
const CustomMenu=styled(MenuIcon)`
cursor: pointer;
`
const BurgerNav=styled.div`
background: white;
position: fixed;
top:0;
bottom: 0;
right:0;
width: 300px;
z-index: 16;
list-style: none;
padding: 20px;
display: flex;
flex-direction: column;
text-align: start;
li{
	padding: 15px 0;
	border-bottom: 1px solid rgba(0,0,0,0.2);
	a{
		font-weight: 600;
		text-decoration: none;
	}
}
transform: ${props=>props.show?'translateX(0)':'translateX(100%)'};
transition: transform 0.25s;
`
const CustomClose=styled(CloseIcon)`
cursor: pointer;
`
const CloseWrapper=styled.div`
display: flex;
justify-content: flex-end;
`