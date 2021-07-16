import React from 'react'
import Logo from './images/logo.svg'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
const Header = () => {
	return (
		<Container>
		  <a>
			  <img src={Logo} alt="Logo" />
		  </a>
		  <Menu>
			  <a href="">Model S</a>
			  <a href="">Model 3</a>
			  <a href="">Model X</a>
			  <a href="">Model Y</a>
		  </Menu>
		  <RightMenu>
			  <a href="#">Shop</a>
			  <a href="#">Tesla Account</a>
			  <CustomMenu/>
		  </RightMenu>
		</Container>
	)
}

export default Header

const Container=styled.div`
min-height: 60px;position:fixed;
align-items: center;display:flex;padding:0 20px;
top: 0;left:0;right:0;
justify-content: space-between;
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