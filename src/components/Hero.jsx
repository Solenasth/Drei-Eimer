import React from "react";
import styled from "styled-components";

const Gradient = `
45deg, rgba(131,58,180,.8) 0%, rgba(253,29,29,.8) 50%, rgba(252,176,69,.8) 100%
`;

const HeroDiv = styled.div`
  height: 40vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(${Gradient});
  background-size: 600% 600%;
`;

const Title = styled.h1`
  color: white;
  font-size: 2em;
  border-width: 0.1em;
  border-style: solid;
  padding: 1em;
  background-color: rgba(255, 255, 255, 0.1);
`;

function Hero() {
  return (
    <HeroDiv className="Hero">
      <Title> Drei Einer Challange </Title>
    </HeroDiv>
  );
}
export default Hero;
