import React from 'react';
import styled from 'styled-components';

const cone = require('../photo_assets/logos_banners/cone_whiteBorder.png')

const NewsLetterSignUp = () => {

  return (
    <ConeContainer>
      <InputContainer>
          <Title>GET NEWS & UPDATES</Title>
          <Form action="">
            <Input type="text" placeholder='email address'/>
            <Button>SIGN UP</Button>
          </Form>
          <Disclaimer>
            By clicking 'SIGN UP,' I represent I am at least the age of twenty-one (21), I have read, understood, and agree to the Terms of Service and Privacy Policy and I agree to receive emails and customer service communications from The Stoned Cold Dreamery via email. I can unsubscribe at any time by clicking 'unsubscribe' in emails.
          </Disclaimer>
        </InputContainer>
      <Container>
      </Container>
    </ConeContainer>
  );
};

const Container = styled.div`
  width: 100%;
  position: relative;
  height: 30vh;
  display: flex;
  opacity: 20%;
  flex-direction: column;
  margin-top: 5px;
  margin-bottom: 5px;
  background-image: url(${cone});
  background-color: rgb(255,255,255);
  background-size: 70px 70px;
  z-index: 2;
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
  @media (min-width: 425px) {
    font-size: 16px;
    width: 10vw;
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
  height: 30vh;
  width: 100%;
  background-color: white;
  opacity: 100%;
  z-index: 1;
`;
const Disclaimer = styled.div`
  font-color:black;
  font-size: 12px;
  padding-top: 10px;
  width: 50vw;
  @media (min-width: 425px) {
    font-size: 10px;
    width: 70vw;
  }
  @media (min-width: 660px) {
    font-size: 16px;
    width: 60vw;
  }
`;
const Form = styled.form`
  background-color: white;
  border: 3px inset aqua;
  display: flex;
  justify-content: space-between;
  width: 50vw;
  @media (min-width: 425px) {
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
  @media (min-width: 425px) {
    width: 50vw;
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
  z-index: 4;
  height: 0.1vh;
  opacity: 1;
  width: 100%;
`;
const Title = styled.h1`
  align-self: center;
  color: black;
  font-size: 50px;
  @media (min-width: 425px) {
    font-size: 40px;
  }
  @media (min-width: 768px) {
    font-size: 50px;
  }
  @media (min-width: 2560px) {
    font-size: 60px;
  }
`;
// const GlobalStyle = createGlobalStyle`
//   body *:not(${InputContainer}) {
//     opacity: 0.2;
//   }


export default NewsLetterSignUp;
