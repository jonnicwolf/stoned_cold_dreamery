import React from 'react';
import styled from 'styled-components';
import NewsLetterSignUp from '../components/NewsLetterSignUp';

const Sandbox = () => {
  return (
    <Container>
      <NewsLetterSignUp />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 40vh;
`;

export default Sandbox;
