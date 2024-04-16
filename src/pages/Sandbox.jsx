import React from 'react';
import styled from 'styled-components';
import Flavors from '../components/Flavors';

const Sandbox = () => {
  return (
    <Container>
      <Flavors />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 40vh;
`;

export default Sandbox;
