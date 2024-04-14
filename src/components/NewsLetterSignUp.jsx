import React from 'react';
import styled from 'styled-components';

const cone = require('../photo_assets/logos_banners/cone_whiteBorder.png')

const NewsLetterSignUp = () => {

  return (
    <ConeContainer>
      <InputContainer>
        <Title>GET EXCLUSIVE NEWS AND CONTENT</Title>
        <Form action="">
          <Input type="text" placeholder='email address'/>
          <Button>SIGN UP</Button>
        </Form>
        <Disclaimer>
          By clicking 'SIGN UP,' I represent I am at least the age of twenty-one (21), I have read, understood, and agree to the Terms of Service and Privacy Policy and I agree to receive emails and customer service communications from The Stoned Cold Dreamery via email. I can unsubscribe at any time by clicking 'unsubscribe' in emails.
        </Disclaimer>
      </InputContainer>
      <Container />
    </ConeContainer>
  );
};

const Container = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
  display: flex;
  opacity: 10%;
  flex-direction: column;
  background-image: url(${cone});
  background-size: 40px 40px;
  z-index: 2;
  }
`;
const Button = styled.button`
  border: none;
  background-color: white;
  font-size: 25px;
  font-family: var(--font-family-modak);
  height: 60px;
  padding: 0;
  width: 20%;
  border-radius: 30px;
  &:hover {
    background-color: black;
    color: white;
    transition: background-color 0.15s ease-in;
  }
`;
const ConeContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  opacity: 100%;
  z-index: 1;
  @media only screen and (max-width: 767px) {
    padding-bottom: 5vh;
  }
`;
const Disclaimer = styled.div`
  font-color:black;
  font-size: 12px;
  padding-top: 10px;
  width: 59%;
`;
const Form = styled.form`
  background-color: white;
  border: 3px inset aqua;
  display: flex;
  justify-content: space-between;
  width: 60%;
  border-radius: 30px;
`;
const Input = styled.input`
  border: none;
  font-size: 30px;
  outline: none;
  padding: 10px;
  width: 80%;
  border-radius: 30px;
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
  font-size: 2.5em;
  font-family: 'Bebas Neue';
`;

export default NewsLetterSignUp;
