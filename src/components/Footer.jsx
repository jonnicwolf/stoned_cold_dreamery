import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import NewsLetterSignUp from './NewsLetterSignUp';
import Logo from './Logo';

const Footer = () => {
  return (
    <Container>
      <NewsLetterSignUp />

      <AboutLinks>
        <LeftBox>
          <div>HOME TEAM</div>
          <div>CONTACT US</div>
          <div>REFER A FRIEND</div>
          <div>ACCESSIBILITY</div>
          <div>FAQS</div>
          <div>PRIVACY POLICY</div>
          <div>TERMS OF SERVICE</div>
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
        <Logo />
        {/* <Copyright>&#9400; 2020 - 2040 The Stoned Cold Dreamery. All rights reserved. </Copyright> */}
      </FooterLogoContainer>
      
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10vh;
`;
const AboutLinks = styled.div`
  display: flex;
  margin-top: 10vh;
`;
const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  wrap: nowrap;
  justify-content: space-around;
  align-items: start;
  width: 70%;
  height: 40vh;
`;
const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  height: 40vh;
  width: 30%;
`;
const BoxLink = styled(Link)`
  
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
const Copyright = styled.p`
  font-size: 1.5vh;
  font-family: Permanent Marker;
`
const FooterLogoContainer = styled.footer`
  align-items: center;
  background-color: black;
  display: flex;
  height: 20%;
  justify-content: center;
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 5;
`;

export default Footer;
