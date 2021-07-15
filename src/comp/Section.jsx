import React from "react";
import styled from "styled-components";
import arrow from  './down-arrow.svg'
const Section = () => {
  return (
    <Wrap>
      <ItemText>
        <h1>Model S</h1>
        <p>Oder online for touchless delivery</p>
      </ItemText>
      <Button>
        <ButtonGroup>
          <LeftButton>Custom Oder</LeftButton>
          <RightButton>Existing Inventory</RightButton>
        </ButtonGroup>
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
  background-image: url("https://images.unsplash.com/photo-1597404294360-feeeda04612e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzJTIwY2FyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80");
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

const RightButton = styled(LeftButton)``;

const DownArrow = styled.img`
  margin-top: 20px;
  height:40px;
  animation:animateDown infinite 1.5s;
  overflow-x:hidden;
`

const Button = styled.div`
  padding: 1px;
`
