import React from "react";
import styled from "styled-components";
import arrow from  './down-arrow.svg'
import Fade from 'react-reveal/Fade';
const Section = ({title,description,backgroundImage,leftbtntext,rightbtntext}) => {
  return (
    <Wrap bgImage={backgroundImage}>
      <Fade bottom>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      </Fade>   
      <Button>
        <Fade bottom>
        <ButtonGroup>
          <LeftButton>{leftbtntext}</LeftButton>
          {rightbtntext&&<RightButton>{rightbtntext}</RightButton> }
          
        </ButtonGroup>
        </Fade>
       
        <DownArrow src={arrow}/>
      </Button>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-image: ${props=>`url(${props.bgImage})`};
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-aign: center;
  
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width:700px){
    flex-direction:column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
background:white;
color:black;
opacity:0.5;
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height:40px;
  animation:animateDown infinite 1.5s;
  overflow-x:hidden;
`

const Button = styled.div`
  padding: 1px;
`
