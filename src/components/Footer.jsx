import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

import { SocialIcon } from 'react-social-icons';
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
            <SocialIcon
              url='https://www.instagram.com/thestoned_cold_dreamery/'
              fgColor="black"
              bgColor="white"
              />
            <SocialIcon
              url='https://twitter.com/theSCDreamery'
              fgColor="black"
              bgColor='white'
            />
          </IconBox>
          <Privacy>
            <PrivacyBox>Managing Data | Privacy Preferences</PrivacyBox>
            <PrivacyBox>Do Not Sell My Personal Information</PrivacyBox>
            <PrivacyBoxLarge>Interest-Based Ads</PrivacyBoxLarge>
          </Privacy>
        </RightBox>
      </AboutLinks>

      <FooterLogoContainer>
        <Logo size={'large'}/> <span style={{color: 'white'}}>TM</span>
        {/* <Copyright>&#9400; 2020 - 2040 The Stoned Cold Dreamery. All rights reserved. </Copyright> */}
      </FooterLogoContainer>
      
    </Container>
  );
};

const NewsLetterSignUpWrapper = styled.div`
  height: 40%;
  @media screen and (max-width: 767px) {
    height: 23%;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1vh;
  height: 70vh;
  @media screen and (max-width: 767px) {
    height: 350vw;
  }
`;
const AboutLinks = styled.div`
  display: flex;
  height: 50%;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    height: 40%;
  }
`;
const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 767pc) {
    width: 100%;
  }
`;
const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 30%;
  @media screen and (max-width: 767pc) {
    width: 100%;
  }
`;
const BoxLink = styled(Link)`
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-width: 1px 1px 0 1px;
  font-family: 'Modak';
  text-decoration: none;
  height: 100%;
  width: 100%;
  font-size: 2em;
  color: rgb(0,0,0,1);
  &:hover {
    background-color: black;
    color: white;
    transition: background-color 0.2s ease-out;
  }
`;
const Privacy = styled.div`
  text-align: right;
  height: 50%;
  width: 100%;
  
`;
const PrivacyBox = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border: 1px solid black;
  border-width: 0 1px 1px 1px;
`;
const PrivacyBoxLarge = styled.div`
  border: 1px solid black;
  border-width: 0 1px 1px 1px;
  height: 60%;
`;
const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20%;
  height: 50%;
  border: 1px solid black;
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
  justify-content: center;
  width: 100%;
  bottom: 0;
  z-index: 5;
  overflow: hidden;
  @media screen and (max-width: 767px) {
    height: 10%;
  }
  @media screen and (min-width: 1500px) {
    height: 30%;
  }
`;

export default Footer;
