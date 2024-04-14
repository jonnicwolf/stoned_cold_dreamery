import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import NewsLetterSignUp from './NewsLetterSignUp';
import Logo from './Logo';

const Footer = () => {
  return (
    <Container>
      <NewsLetterSignUpWrapper>
        <NewsLetterSignUp />
      </NewsLetterSignUpWrapper>

      <AboutLinks>
        <LeftBox>
          <BoxLink>HOME TEAM</BoxLink>
          <BoxLink>CONTACT US</BoxLink>
          <BoxLink>REFER A FRIEND</BoxLink>
          <BoxLink>ACCESSIBILITY</BoxLink>
          <BoxLink>FAQS</BoxLink>
          <BoxLink>PRIVACY POLICY</BoxLink>
          <BoxLink>TERMS OF SERVICE</BoxLink>
        </LeftBox>
        <RightBox>
          <IconBox>
            <div>ig</div>
            <div>twitter</div>
            <div>fb</div>
          </IconBox>
          <Privacy>
            <PrivacyBox>Managing Data | Privacy Preferences</PrivacyBox>
            <PrivacyBox>Do Not Sell My Personal Information</PrivacyBox>
            <div>Interest-Based Ads</div>
          </Privacy>
        </RightBox>
      </AboutLinks>

      <FooterLogoContainer>
        <Logo size={'large'}/>
        {/* <Copyright>&#9400; 2020 - 2040 The Stoned Cold Dreamery. All rights reserved. </Copyright> */}
      </FooterLogoContainer>
      
    </Container>
  );
};

const NewsLetterSignUpWrapper = styled.div`
  height: 30%;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10vh;
  height: 70vh;
`;
const AboutLinks = styled.div`
  display: flex;
  height: 50%;
`;
const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  height: 40vh;
  width: 30%;
`;
const BoxLink = styled(Link)`
  display: flex;
  align-items: center;
  border: 2px solid black;
  font-family: 'Modak';
  text-decoration: none;
  height: 100%;
  width: 100%;
  padding-left: 10px;
  font-size: 2em;
  color: rgb(0,0,0,1);
`;
const Privacy = styled.div`
  text-align: right;
  height: 50%;
`;
const PrivacyBox = styled.div`
  height: 20%;
  width: 100%;
  border: 1px solid grey;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid blue;
  gap: 20%;
  height: 50%;
`;
// const Copyright = styled.p`
//   font-size: 1.5vh;
//   font-family: Permanent Marker;
// `
const FooterLogoContainer = styled.div`
  align-items: center;
  background-color: black;
  display: flex;
  height: 20%;
  border: 1px solid yellow;
  justify-content: center;
  width: 100%;
  // position: fixed;
  bottom: 0;
  z-index: 5;
`;

export default Footer;
