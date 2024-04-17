import React from 'react';
import styled from 'styled-components';

const MultiFrameWindow4 = () => {
  return (
    <Container>
      <Title>Flavors</Title>
      <Frame></Frame>
      <Frame></Frame>
      <Frame></Frame>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 40vw;
`;
const Frame = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 100%;
`;
const Title = styled(Frame)`
  font-family: Modak;
  font-size: 3vw;
  font-weight: heavy;

  text-align: center;
`;

export default MultiFrameWindow4;
