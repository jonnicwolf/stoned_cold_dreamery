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
  @media (min-width: 390px) {
    font-size: 20px;
    transform: translateX(50px);
    width: 30vw;
  }
  @media (min-width: 768px) {
    font-size: 30px;
    transform: translateX(19px);
     width: 20vw;
  }
  @media (min-width: 1024px) {
    font-size: 35px;
    width: 15vw;
    transform: translateX(83px);
  }
  @media (min-width: 1440px) {
    transform: translateX(19px);
    width: 10vw;
  }
  @media (min-width: 2560px) {
    font-size: 40px;
    width: 7vw;
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
  @media (min-width: 1024px) {
    transform: translateX(70px);
  }
  @media (min-width: 2560px) {
    width: 40vw;
    transform: translateX(700px);
  }
`
const Form = styled.form`
  background-color: white;
  border: 3px inset aqua;
  @media (min-width: 768px) {
    width: 95%;
    transform: translateX(20px);
  }
  @media (min-width: 1024px) {
    width: 90vw;
    width: 95%;
    transform: translateX(30px);
  }
  @media (min-width: 2560px) {
    width: 50vw;
    transform: translateX(590px);
  }
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
  @media (min-width: 768px) {
    width: 70vw;
    font-size: 28px;
  }
  @media (min-width: 1024px) {
    font-size: 35px;
  }
  @media (min-width: 1440px) {
    width: 82.3vw;
  }
  @media (min-width: 2560px) {
    width: 41.5vw;
    font-size: 45px;
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
    transform: translateX(50px);
  }
  @media (min-width: 768px) {
    font-size: 50px;
    transform: translateX(110px);
  }
  @media (min-width: 1024px) {
    transform: translateX(250px);
  }
  @media (min-width: 1440px) {
    transform: translateX(450px);
  }
  @media (min-width: 2560px) {
    font-size: 60px;
    transform: translateX(900px);
  }
`;

export default NewsLetterSignUp;
