import React from 'react';
import styled from 'styled-components';

const cone = require('/Users/jonathannarine/GithubRepos/cold_stoned_dreamery/src/photo_assets/logos_banners/cone_whiteBorder.jpg');

const NewsLetterSignUp = () => {
  const cones = [];
  for (let i=0; i<=44; i++) {
    cones.push(<Cone src={cone} alt=''/>)
  };
  return (
    <>
      <ConeContainer>
        {cones}
      </ConeContainer>
      <InputContainer>
        <Title>GET NEWS & UPDATES</Title>
        <Form action="">
          <Input type="text" />
          <Button>SIGN<br/>UP</Button>
        </Form>
        <Disclaimer>
        By clicking 'SIGN UP,' I represent I am at least the age of twenty-one (21), I have read, understood, and agree to the Terms of Service and Privacy Policy and I agree to receive emails and customer service communications from Houseplant via email. I can unsubscribe at any time by clicking 'unsubscribe' in emails.
        </Disclaimer>
      </InputContainer>
    </>
  );
};

const Button = styled.button`
  border: none;
  background-color: white;
  font-size: 25px;
  font-weight: bold;
  height: 60px;
  overflow: hidden;
  padding: 0;
  transform: translateY(-15px);
  width: 150px;
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
`;
const Cone = styled.img`
  width: 80px;
  height: 140px;
  opacity: 20%
`;
const Disclaimer = styled.div`
  font-color:black;
  font-size: 12px;
  padding-top: 10px;
  width: 560px;
`
const Form = styled.form`
  background-color: white;
  border: 2px inset aqua;
`;
const Input = styled.input`
  border: none;
  font-size: 40px;
  height: 70px;
  outline: none;
  padding: 10px;
  width: 400px;
`;
const InputContainer = styled.div`
  transform: translateY(-400px);
`;
const Title = styled.h1`
  color: black;
  transform: translateX(20px);
  font-size: 50px;
`;

export default NewsLetterSignUp;
