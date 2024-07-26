import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const blue_dream = require( '../photo_assets/flavors/blue_dream.jpg' );

export default function FlavorCard() {
  return (
    <Container>
      <Link to='/cream'>
        <Img src={blue_dream}/>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  width: 25%;
  height: 100%
  display: flex;
  flex-direction: column;
  background-color: #f2f2f0;
  padding: 55px;
  margin: 1vw;
  border-radius: 3%;
  box-shadow: 0px 1px 20px 1px;
  @media screen and (max-width: 1064px) {
    height: 50%;
    width: 49.7vw;
    border: 1px solid #ebbf9e;
  }
`;

const Img = styled.img`
  object-fit: cover;
  height: 70%;
  width: 100%;
  max-width: 100%;
  position: relative;
  border-radius: 5%;
`;
