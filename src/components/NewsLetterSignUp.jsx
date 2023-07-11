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
      </InputContainer>
    </>
  );
};

const Button = styled.button`
  border: 0;
  background-color: white;
  font-size: 30px;
  height: 100px;
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
const Form = styled.form`
  background-color: white;
`;
const Input = styled.input`
  border: none;
  border-right-style: solid;
  border-right-color: grey;
  border-right-width: 1px;
  height: 150px;
  padding: 10px;
  width: 400px;
`;
const InputContainer = styled.div`
  transform: translateY(-400px);
`;
const Title = styled.h1`
  color: black;
  transform: translateX(15px);
  font-size: 50px;
`;

export default NewsLetterSignUp;
