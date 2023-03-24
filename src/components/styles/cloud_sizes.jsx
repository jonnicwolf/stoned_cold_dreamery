import styled, { css } from "styled-components";

const Cloud = styled(css)`
  -webkit-animation: clouds 60s infinite linear;
  -moz-animation: clouds 60s infinite linear;
  -ms-animation: clouds 60s infinite linear;
  -o-animation: clouds 60s infinite linear;
  animation: clouds 60s infinite linear;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 10px;
  position: relative;
  margin: 20px 20px 10px 2050px;
  width: 54px;
  height: 5px;
  background: black;
  & div {
    -moz-box-shadow: inset -2px -3px 0 0 #f7e7eb;
    -webkit-box-shadow: inset -2px -3px 0 0 #f7e7eb;
    box-shadow: inset -2px -3px 0 0 #f7e7eb;
    position: absolute;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    left: -3px;
    bottom: 0;
    background: #fafbf0;
    z-index: 10;
  }
  & div:first-child + div {
    -moz-transform: scale(1.6, 1.6);
    -ms-transform: scale(1.6, 1.6);
    -webkit-transform: scale(1.6, 1.6);
    transform: scale(1.6, 1.6);
    margin: 0 0 4px 13px;
    z-index: 9;
  }
  & div:first-child + div + div {
    -moz-transform: scale(2.4, 2.4);
    -ms-transform: scale(2.4, 2.4);
    -webkit-transform: scale(2.4, 2.4);
    transform: scale(2.4, 2.4);
    margin: 0 0 9px 32px;
    z-index: 8;
  }
  & div:first-child + div + div + div {
    -moz-transform: scale(1.3, 1.3);
    -ms-transform: scale(1.3, 1.3);
    -webkit-transform: scale(1.3, 1.3);
    transform: scale(1.3, 1.3);
    margin: 0 0 2px 50px;
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
    }
    100% {
        left: 20%;
    }
  }
`;
const TinyCloud = styled(Cloud)`
  -moz-transform: scale(0.35);
  -ms-transform: scale(0.35);
  -webkit-transform: scale(0.35);
  transform: scale(0.35);
`;
const SmallCloud = styled(Cloud)`
  -moz-transform: scale(1, 1);
  -ms-transform: scale(1, 1);
  -webkit-transform: scale(1, 1);
  transform: scale(1, 1);
`;
const CloudNormal = styled(Cloud)`
  -moz-transform: scale(2, 2);
  -ms-transform: scale(2, 2);
  -webkit-transform: scale(2, 2);
  transform: scale(2, 2);
`;
const CloudLarge = styled(Cloud)`
  -moz-transform: scale(1,1);
  -ms-transform: scale(1,1);
  -webkit-transform: scale(1,1);
  transform: scale(1,1);
`;

export {
  TinyCloud,
  SmallCloud,
  CloudNormal,
  CloudLarge
};
