import React, { useState } from 'react';
import styled from 'styled-components';

const background = require('../photo_assets/logos_banners/refer_background.png')

const Refer = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <Container background={background}>
      {showLinks ?
        <P>We've sent your friend an email!</P> 
        :
        <BoxContainer>
          <Box>
            <P>Refer a Friend</P>
            <Title>GIVE $25, GET $25</Title>
            <P>Know someone who might dig the Dreamery? Give them $25 off their first order of $150 or more and get $25 off your next order.</P>
          
            <Input placeholder='Their email address' />
          
          <Button onSubmit={()=>setShowLinks(!showLinks)}>NEXT</Button>
          </Box>
        </BoxContainer>
      }
    </Container>
  );
};

const Container = styled.div`
  // margin-top: 20vh;
  color: #104e65;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  // margin-bottom: 10vh;
  background-image: url(${props => props.background})
`;
const BoxContainer = styled.div`
  margin-top: 20vh;
  margin-bottom: 10vh;
`;
const Box = styled.div`
  width: 70vw;
  height: 70vh;
  border: 1px solid #d18755;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 2vw;
  text-align: center;
`;
const P = styled.p`
  font-size: 1.5vw;
  text-align: center;
`;
const Input = styled.input`
  width: 80%;
  height: 5%;
  border: 1px solid #d18755;
  margin-bottom: 5vw;
`;
const Button = styled.button`
  width: 50%;
  height: 5%;
  padding: 0;
  margin: 0;
  font-size: 2vw;
  border: 1px solid #d18755;
  background: transparent;
`;

export default Refer;
