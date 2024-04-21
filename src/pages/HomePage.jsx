import React from 'react';
import styled from 'styled-components';

import Carousel from '../components/Carousel';
import Flavors from '../components/Flavors.jsx'

import { boricanna, boricanna_shared_joint, logo_dude_pink, logo_plain_estd  } from '../photo_assets/carousel_home/index.js';

const banners = [ logo_dude_pink, boricanna_shared_joint, logo_plain_estd, boricanna ];
const carousel_webBanner_speed = 5000; // in ms

const Home = () => {
  return (
    <Container>
      <WebBannerBackground>
        <Carousel
          slides={banners}
          cover={true}
          time={carousel_webBanner_speed}
          activationMode={'automatic'}
          size={'large'} />
      </WebBannerBackground>

      <Flavors />
    </Container>
  );
};

const Container = styled.div`
  align-items: center;
  background-color: black;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
`;
const WebBannerBackground = styled.div`
  width: 100vw;
  height: 100vw;
`;

export default Home;
