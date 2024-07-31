import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

import { SocialIcon } from 'react-social-icons';
import NewsLetterSignUp from './NewsLetterSignUp';
import Logo from './Logo';

const Footer = () => {
  return (
    <Container>
      <NewsLetterSignUp />

      <AboutLinks>
        <LeftBox>
          <BoxLink to='/contact'>
            <PaddingWrap>CONTACT US</PaddingWrap>
          </BoxLink>
          <BoxLink to='/refer'>
            <PaddingWrap>REFER A FRIEND</PaddingWrap>
            </BoxLink>
          <BoxLink to='/accessibility'>
            <PaddingWrap>ACCESSIBILITY</PaddingWrap>
          </BoxLink>
          <BoxLink to='/faqs'>
            <PaddingWrap>FAQS</PaddingWrap>
            </BoxLink>
          <BoxLink to='/privacy'>
            <PaddingWrap>PRIVACY POLICY</PaddingWrap>
          </BoxLink>
          <BoxLink to='/tos' style={{borderBottom: '1px solid #d18755'}}>
            <PaddingWrap>TERMS OF SERVICE</PaddingWrap>
          </BoxLink>
        </LeftBox>

        <RightBox>
          <IconBox>
            <Social
              url='https://www.instagram.com/thestoned_cold_dreamery/'
              fgColor="white"
              bgColor="#104e65"
              />
            <Social
              url='https://twitter.com/theSCDreamery'
              fgColor="white"
              bgColor='#104e65'
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
      </FooterLogoContainer>

    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 60vh;
  height: 100%;
  color: #104e65;
  @media screen and (max-width: 1000px) {
    height: 100vh;
  }
`;

const AboutLinks = styled.div`
  display: flex;
  height: 40vh;
  color: #104e65;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    height: 90%;
  }
`;
const FooterLogoContainer = styled.div`
  align-items: center;
  background-color: #104e65;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 5;
  overflow: hidden;
  @media screen and (max-height: 1000px) {
    height: 20%;
  }
`;
const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
  @media screen and (max-width: 1000px) {
    height: 60%;
    width: 100%;
  }
`;
const RightBox = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  width: 30%;
  @media screen and (max-width: 1000px) {
    height: 40%;
    width: 100%;
  }
`;
const BoxLink = styled(Link)`
  display: flex;
  align-items: center;
  border: 1px solid #d18755;
  border-width: 1px 1px 0 1px;
  font-family: 'Modak';
  text-decoration: none;
  height: 100%;
  width: 100%;
  font-size: 2rem;
  color: #104e65;
  &:hover {
    background-color: #104e65;
    color: white;
    transition: background-color 0.2s ease-out;
  }
  @media screen and (max-width: 1200px) {
    justify-content: center;
    font-size: 1.5rem;
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
  border: 1px solid #d18755;
  border-width: 0 1px 1px 1px;
  color: #104e65;
  @media screen and (max-width: 1200px) {
    justify-content: center;
  }
`;
const PrivacyBoxLarge = styled.div`
  border: 1px solid #d18755;
  border-width: 0 1px 1px 1px;
  height: 60%;
  @media screen and (max-width: 1200px) {
    display: flex;
    justify-content: center;
  }
`;
const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20%;
  height: 50%;
  border: 1px solid #d18755;
`;
const PaddingWrap = styled.div`
  padding-left: 5px;
`;
const Social = styled(SocialIcon)`
  transition: all 0.3s linear;
  &: hover {
    scale: 1.1;
  }
`;

export default Footer;
