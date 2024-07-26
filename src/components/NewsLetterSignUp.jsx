import React from 'react';
import styled from 'styled-components';

const cone = require('../photo_assets/logos_banners/cone_whiteBorder.png')

const NewsLetterSignUp = () => {

  return (
    <ConeContainer>
      <InputContainer>
        <Title>GET EXCLUSIVE NEWS AND CONTENT</Title>
        <Form action="">
          <Input type="text" placeholder='ice@cream.com'/>
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
  background-color: #fffff6;
  z-index: 2;
  border: 1px solid blue;
  }
`;
const Button = styled.button`
  border: none;
  background-color: white;
  color: #104e65;
  font-size: 3vw;
  font-family: var(--font-family-modak);
  height: 60px;
  padding: 0;
  width: 20%;
  border-radius: 30px;
  @media screen and (min-width: 1800px) {
    font-size: 1.5vw
  }
  &:hover {
    background-color: #104e65;
    color: white;
    transition: background-color 0.15s ease-in;
  }
`;
const ConeContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #fffff6;
  opacity: 100%;
  z-index: 1;
  // @media only screen and (max-width: 767px) {
  //   padding-bottom: 5vh;
  // }
`;
const Disclaimer = styled.div`
  font-color: #104e65;
  font-size: 0.5rem;
  margin-top: 10px;
  width: 80%;
  // text-wrap: nowrap;
  text-overflow: ellipsis;
`;
const Form = styled.form`
  background-color: white;
  border: 3px inset #d18755;
  display: flex;
  justify-content: space-between;
  width: 60%;
  min-width: 270px;
  border-radius: 30px;
  @media screen and (max-width: 720px) {
    width: 80%;
  }
`;
const Input = styled.input`
  border: none;
  font-size: 2rem;
  outline: none;
  padding: 10px;
  width: 80%;
  border-radius: 30px;
  @media screen and (max-width: 720px) {
    font-size: 1.5rem;
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
  color: #104e65;
  font-size: 4rem;
  font-family: 'Bebas Neue';
  @media screen and (max-width: 500px) {
    font-size: 2rem;
  }
`;

export default NewsLetterSignUp;
