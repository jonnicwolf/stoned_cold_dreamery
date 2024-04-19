import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

import { SocialIcon } from 'react-social-icons';
import NewsLetterSignUp from './NewsLetterSignUp';
import Logo from './Logo';
import ColoredCalendarIcon from './ColoredCalendarIcon';

const Footer = () => {
  return (
    <Container>
      <NewsLetterSignUpWrapper>
        <NewsLetterSignUp />
      </NewsLetterSignUpWrapper>

      <AboutLinks>
        <LeftBox>
          {/* <BoxLink>
            <PaddingWrap>HOME TEAM</PaddingWrap>
          </BoxLink> */}
          <BoxLink>
            <ColoredCalendarIcon color={'#104e65'}/>
            <PaddingWrap>CONTACT US</PaddingWrap>
          </BoxLink>
          <BoxLink>
            <PaddingWrap>REFER A FRIEND</PaddingWrap>
            </BoxLink>
          <BoxLink>
            <PaddingWrap>ACCESSIBILITY</PaddingWrap>
          </BoxLink>
          <BoxLink>
            <PaddingWrap>FAQS</PaddingWrap>
            </BoxLink>
          <BoxLink>
            <PaddingWrap>PRIVACY POLICY</PaddingWrap>
          </BoxLink>
          <BoxLink>
            <PaddingWrap>TERMS OF SERVICE</PaddingWrap>
          </BoxLink>
        </LeftBox>

        <RightBox>
          <IconBox>
            <SocialIcon
              url='https://www.instagram.com/thestoned_cold_dreamery/'
              fgColor="white"
              bgColor="#104e65"
              />
            <SocialIcon
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

const NewsLetterSignUpWrapper = styled.div`
  height: 40%;
  @media screen and (max-width: 767px) {
    height: 23%;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
  color: #104e65;
  @media screen and (max-width: 767px) {
    height: 350vw;
  }
`;
const AboutLinks = styled.div`
  display: flex;
  height: 50%;
  color: #104e65;
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
  border: 1px solid #d18755;
  border-width: 1px 1px 0 1px;
  font-family: 'Modak';
  text-decoration: none;
  height: 100%;
  width: 100%;
  font-size: 2em;
  color: #104e65;
  adding-left: 15px;
  &:hover {
    background-color: #104e65;
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
  border: 1px solid #d18755;
  border-width: 0 1px 1px 1px;
  color: #104e65;
`;
const PrivacyBoxLarge = styled.div`
  border: 1px solid #d18755;
  border-width: 0 1px 1px 1px;
  height: 60%;
`;
const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20%;
  height: 50%;
  border: 1px solid #d18755;
`;
const FooterLogoContainer = styled.div`
  align-items: center;
  background-color: #104e65;
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
const PaddingWrap = styled.div`
  padding-left: 5px;
`;

export default Footer;
