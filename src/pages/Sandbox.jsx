import React from 'react';
import styled from 'styled-components';
import Flavors from '../components/Flavors';
import Cloud from '../components/Cloud';

import { cloud, animation } from '../components/customizations';
const Sandbox = () => {
  const {
    fluffy,
    extra_fluffy
  } = cloud;
  const [
    motion_one,
    motion_two,
    motion_three,
    motion_four,
    motion_five,
    motion_six,
    motion_seven,
    motion_eight,
    motion_nine,
    motion_ten,
    motion_eleven,
    motion_twelve,
    motion_thirteen,

  ] = animation;
  return (
    <Container>
      <Cloud scale={extra_fluffy} animation={motion_thirteen} />
      {/* <Flavors /> */}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 40vh;
`;

export default Sandbox;
