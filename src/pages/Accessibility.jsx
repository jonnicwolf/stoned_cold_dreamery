import React from 'react';
import styled from 'styled-components';

const Accessibility = () => {
  return (
    <Container>
      <Title>ACCESSIBILITY</Title>
      <Content>
        <P>
          Stoned Cold Dreamery strives to make its products and website accessible to everyone. We look to the Web Content Accessibility Guidelines 2.1, Levels A and AA, in the course of our ongoing review of the website.
        </P>
        <P>
          If you need assistance with placing an order, please reach out to help@houseplant.com and we would be happy to assist you. To report accessibility issues or bugs, you can also reach out to help@houseplant.com  so we can investigate the issue or bug as part of our review.
        </P>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 10vh;
  color: #104e65;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5vw;
`;
const Content = styled.div`
  text-align: center;
  width: 70vw;
  max-width:  800px;
`
const Title = styled.h1`
  font-family: Bebas Neue;

`;
const P = styled.p`
`;

export default Accessibility;
