import React from 'react';
import { CloudLarge } from './styles/cloud_sizes';
import { cloud_1 } from './styles/cloud_animations';

const Logo = () => {
  return (
    <div>
      <Cloud size={CloudLarge} animation={cloud_1}/>
      <LogoIcons>
          <StoneColdDreamery />
          <Cone/>
      </LogoIcons>
    </div>
  )
}

export default Logo