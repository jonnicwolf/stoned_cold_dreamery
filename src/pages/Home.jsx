import React from 'react';
import Carousel from '../components/Carousel';
import {
  Dudes,
  LogoPlainEstd,
  LogoDudeEstd,
  LogoTransparentBlack,
  LogoTransparentWhite,
  ShirtMerch,
  TubBluedream
} from '../photo_assets/carousel_home';

const Home = () => {
  const slides = [
  {images: Dudes},
  {images: LogoPlainEstd},
  {images: LogoDudeEstd},
  {images: LogoTransparentBlack},
  {images: LogoTransparentWhite},
  {images: ShirtMerch},
  {images: TubBluedream}
  ];

  return (
    <>
      <Carousel slides={slides} />
    </>
  )
}

export default Home