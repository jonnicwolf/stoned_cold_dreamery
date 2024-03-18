import React from 'react';
import styled from 'styled-components';
import Cloud from '../components/Cloud';
import {cloud, animation} from '../components/customizations';

const {
  // tiny,
  // small,
  normal,
  // large
} = cloud;
const [
  // motion_one,
  // motion_two,
  // motion_three,
  // motion_four,
  // motion_five,
  // motion_six,
  // motion_seven,
  // motion_eight,
  // motion_nine,
  motion_ten,
  // motion_eleven,
  // motion_twelve
] = animation;


const Sandbox = () => {
  return (
    <Container>
      <br />
      <br />
      <br />
      <br />
      <Cloud scale={normal} animation={motion_ten}/>
      {/* <Cloud scale={small} animation={motion_ten}/> */}
      {/* <Cloud scale={large} animation={motion_ten}/> */}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 5vh;
  background-color: black;
  height: 100vh;
  width: 100%;
`;

export default Sandbox;
