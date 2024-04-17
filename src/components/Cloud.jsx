import React from 'react';
import styled from 'styled-components';

const Cloud = ( {scale, animation, text} ) => {
  const {duration, left } = animation;
  return (
    <CloudFrame 
      scale={scale}
      duration={duration}
      left={left}>
      <div>
        {text}
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </CloudFrame>
  );
};

const CloudFrame = styled.div`
  -webkit-animation: clouds 60s infinite linear;
  -moz-animation:    clouds 60s infinite linear;
  -ms-animation:     clouds 60s infinite linear;
  -o-animation:      clouds 60s infinite linear;
  animation:         clouds 1s infinite linear;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 10px;
  position: relative;
  margin: 20px 20px -10px 50px;
  width: 54px;
  height: 25px;
  background: white;
  & div {
    -moz-box-shadow: inset -2px -3px 0 0 #f7e7eb;
    -webkit-box-shadow: inset -2px -3px 0 0 #f7e7eb;
    box-shadow: inset -2px -3px 0 0 #f7e7eb;
    position: absolute;
    border-radius: 50%;
    width: 12px;
    width: 22px;
    height: 12px;
    height: 20px;
    left: -3px;
    bottom: 0;
    background: #fafbf0;
    z-index: 10;
  }
  & div:first-child + div {
    -moz-transform: scale(1.6, 1.6);
    -ms-transform: scale(1.6, 1.6);
    -webkit-transform: scale(1.6, 1.6);
    transform: scale(${props => props.scale});
    margin: 0 0 4px 13px;
    margin: 0 0 4px 3px;
    z-index: 9;
  }
  & div:first-child + div + div {
    -moz-transform: scale(2.4, 2.4);
    -ms-transform: scale(2.4, 2.4);
    -webkit-transform: scale(2.4, 2.4);
    transform: scale(${props => props.scale});
    margin: 0 0 9px 32px;
    z-index: 8;
  }
  & div:first-child + div + div + div {
    -moz-transform: scale(1.3, 1.3);
    -ms-transform: scale(1.3, 1.3);
    -webkit-transform: scale(1.3, 1.3);
    transform: scale(${props => props.scale});
    margin: 0 0 2px 50px;
    z-index: 7;
  }
  & div:first-child + div + div + div + div {
    margin: 0 0 90px 60px;
    height: 20px;
    width: 85px;
    position: relative;
    border-radius: 10px;
    transform: translate(-80px, 13px);
    z-index: 7;
  }
  @-webkit-keyframes clouds {
    0% {
      left: -50%;
    }
    100% {
      left: 20%;
    }
  }
  @-moz-keyframes clouds {
    0% {
      left: -50%;
    }
    100% {
      left: 20%;
    }
  }
  @-ms-keyframes clouds {
    0% {
      left: -50%;
    }
    100% {
      left: 20%;
    }
  }
  @keyframes clouds {
    0% {
      left: -50%;
      opacity: 0;
    }
    25% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    75% {
      opacity: 0.5;
    }
    100% {
      left: 120%;
      opacity: 0.8;
    }
  }
  animation-duration: ${props => props.duration};
  left: ${props => props.left};
`;

export default Cloud;