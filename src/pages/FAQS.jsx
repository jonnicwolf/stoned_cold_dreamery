import React from 'react';
import styled from 'styled-components';

const FAQS = () => {
  return (
    <Container>
      <FAQGroup></FAQGroup>
      <Content>
        <Title>RETURNS & REFUNDS</Title>
        <LineBreak/>
        <FAQ>
          <FAQTitle>What is your return and refund policy?</FAQTitle>
          <Policy>
          We accept returns within 30 days of when they’re delivered. To be returned an item must be unused and unopened, and definitely not ashed in.
          <br />
          <br />
          Returns, cancellations and exchanges are not accepted on the following:
          <ul>
            <li>Accessories (matches, rolling papers, etc)</li>
            <li>Producs marked Limited Edition (eg: Pineapple Express) and/or Final Sale</li>
            <li>3 or more of the same item</li>
          </ul>
          <p>
            To return something, please email us first at hello@houseplant.com to get started. You are responsible for all shipping and handling charges on returned items unless otherwise specified or you hand-deliver them back to Houseplant. We’ll get you your refund as soon as the warehouse receives and verifies the product.
            <br/>
            <br/>
            If you were charged but didn’t get your order, or there is any kind of issue with your order, please email us at stonedcolddreamery@gmail.com.
          </p>
          </Policy>
        </FAQ>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 10vh;
  color: #104e65;
  display: flex;
  justify-content: space-between;
  padding: 5vw;
  gap: 5vw;
`;
const FAQGroup = styled.div`
  width: 25%;
`;
const Content = styled.div`
  width: 75%;
  border: 1px solid red;
`;
const Title = styled.h1`
  
`;
const LineBreak = styled.div`
  border-bottom: 1px solid #104e65;
`
const FAQ = styled.div``;
const FAQTitle = styled.h3`

`;
const Policy = styled.div`
  line-height: 2.5vh;
`;

export default FAQS;
