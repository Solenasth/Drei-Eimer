import React from "react";

import styled from "styled-components";

const Gradient = `
45deg, rgba(131,58,180,.8) 0%, rgba(253,29,29,.8) 50%, rgba(252,176,69,.8) 100%
`;

const Section = styled.div`
  width: 40%;
  padding: 2em;
  display: flex;
  min-width: 30em;
`;

const Title = styled.h1`
  background: linear-gradient(${Gradient});
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: none;
  -webkit-text-fill-color: transparent;
  align-self: center;
  font-weight: bolder;
  font-size: 1.8em;
  min-width: 5.2em;
`;

const Blurb = styled.p`
  color: white;
  font-size: 1em;
  font-family: "raleway";
`;

function Intro() {
  return (
    <Section>
      <Title>What is this?</Title>
      <Blurb>
        This app allows you to solve the Drei Einer Challange
        <br /> We have three buckets of diferent capacities. Given an endless
        water supply, use the smallest and the largest buckets to fill the
        remaining bucket. try to do it in the least amount of steps, you can
        also customize the challange to make your own!
      </Blurb>
    </Section>
  );
}

export default Intro;
