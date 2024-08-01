import React from 'react';
import styled from 'styled-components';

const ContactUs = () => {
  return (
    <Container>
      <Title>CONTACT US</Title>
      <SubTitle>Need to get a hold of us?</SubTitle>
      <p><strong>Customer Service & General Inquires: </strong>stonedcolddreamery@gmail.com</p>
      <CenterPg>Send us an email at stonedcolddreamery@gmail.com and we'll do our best to get back to you as soon as possible.</CenterPg>
      <p><strong>Hours of Operation: </strong>Monday-Friday, 8AM-5PM EST</p>
      <br />
      <br />
      <p><strong>Mailing Address: </strong></p>
      <p>Stoned Cold Dreamery LLC</p>
      <p>555 Vesey St</p>
      <p>New York, NY 10080-0001 USA</p>
      <p><strong>Media Inquiries: </strong>stonedcolddreamery@gmail.com</p>
      <p><strong>Career Inquiries: </strong>stonedcolddreamery@gmail.com</p>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 10vh;
  color: #104e65;
  font-size: 2vw;
  font-size: 0.6rem;
  padding: 10px;
  @media screen and (min-width: 720px) {
    font-size: 1rem;
    padding: 30px;
  }
`;
const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-family: 'Bebas Neue';
  margin: 0;
  @media screen and (min-width: 720px) {
    font-size: 10rem;
  }
`;
const SubTitle = styled.h3`
  text-align: center;
  font-size: 1.5rem;
`;
const CenterPg = styled.p`
  text-align: center;
`;

export default ContactUs;
