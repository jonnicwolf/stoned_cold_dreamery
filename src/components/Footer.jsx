import React from 'react';
import styled from 'styled-components';
import NewsLetterSignUp from './NewsLetterSignUp';

const Footer = () => {
  return (
    <Container>
      <NewsLetterSignUp />

      <>
        <>
          <>HOME TEAM</>
          <>CONTACT US</>
          <>REFER A FRIEND</>
          <>ACCESSIBILITY</>
          <>FAQS</>
          <>PRIVACY POLICY</>
          <>TERMS OF SERVICE</>
        </>
        <>
          <>SOCIAL ICONS BOX
            <>ig</>
            <>twitter</>
            <>fb</>
          </>
          <>Managing Data | Privacy Preferences</>
          <>Do Not Sell My Personal Information</>
          <>Interest-Based Ads</>
        </>
      </>

      <FooterLogoContainer>
        <Copyright>&#9400; 2020 - 2040 The Stoned Cold Dreamery. All rights reserved. </Copyright>
      </FooterLogoContainer>
      
    </Container>
  );
};

const Container = styled.div`
  display: flex;
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
