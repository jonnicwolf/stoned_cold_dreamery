import React from 'react';
import styled from 'styled-components';

const cone = require('../photo_assets/logos_banners/cone_whiteBorder.png')

const NewsLetterSignUp = () => {
  const clientWidth = document.documentElement.clientWidth;
  const cones = [];

  for (let i=0; i<=670; i++) {
    cones.push(<Cone src={cone} alt=''/>)
  };
  if (clientWidth === 390) cones.length = 12;

  return (
    <Container>

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

      <ConeContainer> {cones} </ConeContainer>

    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  margin-bottom: 5px;
`;
const Button = styled.button`
  border: none;
  background-color: white;
  font-size: 25px;
  font-family: var(--font-family-modak);
  height: 60px;
  padding: 0;
  &:hover {
    background-color: black;
    border-radius: 30px 0 0 30px;
    color: white;
    transition: background-color 1.5s ease-out-in;
  }
  @media (min-width: 320px) and (max-width: 425px) {
    font-size: 16px;
    width: 18vw;
    line-height: 15px;
  }
  @media (min-width: 768px) {
    font-size: 25px;
     width: 18vw;
  }
  @media (min-width: 1024px) {
    font-size: 35px;
    width: 15vw;
  }
  @media (min-width: 1440px) {
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
  gap: 5px;
  height: 29vh;
  overflow: hidden;
  padding-top: 10px;
  padding-bottom: 10px;
  position: relative;
  width: 100vw;
  z-index: 1;
  @media (min-width: 768px) {
    height: 33vh;
  }
  @media (min-width: 1024px) {
    height: 39vh;
    gap: 10px;
  }
`;
const Cone = styled.img`
  height: 3vh;
  width: 3vw;
  opacity: 20%;
`;
const Disclaimer = styled.div`
  font-color:black;
  font-size: 12px;
  padding-top: 10px;
  width: 50vw;
  @media (min-width: 320px) and (max-width: 425px) {
    font-size: 6px;
    width: 70vw;
  }
  @media (min-width: 2560px) {
    width: 40vw;
  }
`;
const Form = styled.form`
  background-color: white;
  border: 3px inset aqua;
  display: flex;
  justify-content: space-between;
  width: 50vw;
  @media (min-width: 320px) and (max-width: 425px) {
    width: 80vw;
  }
  @media (min-width: 768px) {
    width: 90vw;
  }
  @media (min-width: 1024px) {
    width: 90vw;
    
  }
  @media (min-width: 2560px) {
    width: 50vw;
  }
`;
const Input = styled.input`
  border: none;
  font-size: 30px;
  outline: none;
  padding: 10px;
  width: 42vw;
  @media (min-width: 320px) and (max-width: 425px) {
    width: 60vw;
    font-size: 20px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
  height: 0.1vh;
`;
const Title = styled.h1`
  color: black;
  font-size: 50px;
  @media (min-width: 320px) and (max-width: 425px) {
    font-size: 25px;
  }
  @media (min-width: 768px) {
    font-size: 50px;
  }
  @media (min-width: 2560px) {
    font-size: 60px;
  }
`;

export default NewsLetterSignUp;
