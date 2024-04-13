import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import NewsLetterSignUp from './NewsLetterSignUp';

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
          <>SOCIAL ICONS BOX
            <>ig</>
            <>twitter</>
            <>fb</>
          </>
          <>Managing Data | Privacy Preferences</>
          <>Do Not Sell My Personal Information</>
          <>Interest-Based Ads</>
        </RightBox>
      </AboutLinks>

      <FooterLogoContainer>
        <Copyright>&#9400; 2020 - 2040 The Stoned Cold Dreamery. All rights reserved. </Copyright>
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
`;
const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  wrap: nowrap;
  justify-content: space-around;
  align-items: start;
  padding: 5%;
`;
const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  height: 10vh;
`;
const BoxLink = styled(Link)`
  
`;
const IconBox = styled.div`

`;
const Copyright = styled.p`
  font-size: 1.5vh;
  font-family: Permanent Marker;
`
const FooterLogoContainer = styled.footer`
  align-items: center;
  background-color: white;
  display: flex;
  height: 5vh;
  justify-content: center;
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 5;
`;

export default Footer;
