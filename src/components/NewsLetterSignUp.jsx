import React from 'react';
import styled from 'styled-components';

const cone = require('../photo_assets/logos_banners/cone_whiteBorder.jpg');

const NewsLetterSignUp = () => {
  const clientWidth = document.documentElement.clientWidth;
  console.log(clientWidth)
  const cones = [];
  for (let i=0; i<=44; i++) {
    cones.push(<Cone src={cone} alt=''/>)
  };
  if (clientWidth === 390) cones.length = 12;

  return (
    <Container>
      <ConeContainer>
        {cones}
      </ConeContainer>
      <InputContainer>
        <Title>GET NEWS & UPDATES</Title>
        <Form action="">
          <Input type="text" placeholder='email address'/>
          <Button>SIGN UP</Button>
        </Form>
        <Disclaimer>
        By clicking 'SIGN UP,' I represent I am at least the age of twenty-one (21), I have read, understood, and agree to the Terms of Service and Privacy Policy and I agree to receive emails and customer service communications from Houseplant via email. I can unsubscribe at any time by clicking 'unsubscribe' in emails.
        </Disclaimer>
      </InputContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
`;
const Button = styled.button`
  border: none;
  background-color: white;
  font-size: 25px;
  font-family: var(--font-family-modak);
  height: 60px;
  padding: 0;
  transform: translateY(-5px);
  width: 150px;
  @media (min-width: 390px) {
    font-size: 20px;
    transform: translateX(50px);
    width: 30vw;
  }
`;
const ConeContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 15px;
  height: 450px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  @media (min-width: 390px) {
    width: 100vw;
  }
`;
const Cone = styled.img`
  height: 140px;
  width: 80px;
  opacity: 20%
`;
const Disclaimer = styled.div`
  font-color:black;
  font-size: 12px;
  padding-top: 10px;
  width: 100vw;
  @media (min-width: 390px) {
    transform: translateX(35px);
    width: 90vw;
  }
`
const Form = styled.form`
  background-color: white;
  border: 2px inset aqua;
`;
const Input = styled.input`
  border: none;
  font-size: 30px;
  height: 70px;
  outline: none;
  padding: 10px;
  width: 400px;
  @media (min-width: 390px) {
    width: 50vw;
    font-size: 22px;
  }
`;
const InputContainer = styled.div`
  transform: translateY(-400px);
`;
const Title = styled.h1`
  color: black;
  transform: translateX(20px);
  font-size: 50px;
  @media (min-width: 390px) {
    font-size: 30px;
    transform: translateX(30px);
  }
`;

export default NewsLetterSignUp;
