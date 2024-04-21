import React, { useState } from 'react';
import styled from 'styled-components';

const background = require('../photo_assets/logos_banners/refer_background.png')

const Refer = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <Container background={background}>
      {showLinks ?
        <BoxContainer>
          <Box>
            <P>We've sent your friend an email!</P>
          </Box>
        </BoxContainer>
        :
        <BoxContainer>
          <Box>
            <ReferP>Refer a Friend</ReferP>
            <Title>GIVE $25, GET $25</Title>
            <P>Know someone who might dig the Dreamery? Give them $25 off their first order of $150 or more and get $25 off your next order.</P>
            <Form action="">
              <Input placeholder='email address' required/>
              <Button onSubmit={()=>setShowLinks(!showLinks)}>NEXT</Button>
            </Form>
          </Box>
        </BoxContainer>
      }
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url(${props => props.background})
`;
const BoxContainer = styled.div`
  margin-top: 30vh;
  margin-bottom: 30vh;
  color: #104e65;
  text-align: center;
  font-family: 'Bebas Neue',
`;
const Box = styled.div`
  width: 70vw;
  height: 70%;
  border: 1px solid #d18755;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fffff6;
  padding-bottom: 5vw;
`;
const Title = styled.h1`
  font-size: 3vw;
  text-align: center;
`;
const P = styled.p`
  font-size: 1.5vw;
  width: 65%;
`;
const ReferP = styled(P)`
  text-align: center;
`;
const Input = styled.input`
  width: 80%;
  height: 5vw;
  border: 1px solid #d18755;
  margin-bottom: 5vw;
  font-size: 2vw;
`;
const Form = styled.form`
  width: 80%;
`
const Button = styled.button`
  width: 50%;
  height: 5vw;
  padding: 0;
  margin: 0;
  font-size: 2vw;
  letter-spacing: 5px;
  border: 1px solid #d18755;
  font-family: Modak;
  color: #104e65;
  background: none;
  transition: all .2s linear;
  &:hover {
    background: #104e65;
    color: white;
  }
`;

export default Refer;
