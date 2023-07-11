import React from 'react'
import styled from 'styled-components';

const cone = require('/Users/jonathannarine/GithubRepos/cold_stoned_dreamery/src/photo_assets/logos_banners/cone_whiteBorder.jpg')
const NewsLetterSignUp = () => {
  const cones = []
  for (let i=0; i<=223; i++) {
    cones.push(<Cone src={cone} alt=''/>)
  }
  return (
    <>
      <Container>
        {cones}
        <form action="">

        </form>
      </Container>
      <Title>GET NEWS & UPDATES</Title>
    </>
  );
};

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 15px;
  height: 500px;
  margin-bottom: 10px;
  padding-left: 0px;
  padding-top: 20px;
  width: 100%;
`;
const Cone = styled.img`
  width: 30px;
  height: 50px;
  opacity: 20%
`;
const Title = styled.h1`
  color: white;
  top: 50%;
  left: 50%;
`

export default NewsLetterSignUp;
