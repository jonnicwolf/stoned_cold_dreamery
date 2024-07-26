import React from 'react';
import styled from 'styled-components';
import Flavors from '../components/Flavors';
import FlavorCard from '../components/FlavorCard';

const Sandbox = () => {
  return (
    <Container>
      <FlavorCard />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 40vh;
`;

export default Sandbox;
