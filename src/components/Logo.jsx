import React from 'react';
import Cloud from './Cloud';
import {cloud, animation} from './customizations';

const {tiny} = cloud;
const [motion1] = animation;

const Logo = () => {
  
  return (
    <div>
      <Cloud scale={tiny} animation={motion1}/>
      {/* <LogoIcons>
          <StoneColdDreamery />
          <Cone/>
      </LogoIcons> */}
    </div>
  )
};

export default Logo