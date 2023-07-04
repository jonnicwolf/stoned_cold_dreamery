import React from 'react';
import Carousel from '../components/Carousel';
import {
  Dudes,
  LogoPlainEstd,
  LogoDudeEstd,
  LogoTransparentBlack,
  ShirtMerch,
  TubBluedream
} from '../photo_assets/carousel_home';

const Home = () => {
  const slides = [
  Dudes,
  LogoPlainEstd,
  LogoDudeEstd,
  LogoTransparentBlack,
  ShirtMerch,
  TubBluedream
  ];

  return (
    <>
      <Carousel slides={slides} />
    </>
  )
}

export default Home