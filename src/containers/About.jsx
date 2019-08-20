import React from "react";
import styled from "styled-components";
import AvailableActions from "../components/AvailableActions.jsx";
import Intro from "../components/Intro.jsx";
import MainButtons from "../components/MainButtons.jsx";

const AboutSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const ButtonSection = styled(AboutSection)`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.015);
  height: 10em;
  align-content: center;
`;

function About() {
  return (
    <div>
      <AboutSection>
        <Intro />
        <AvailableActions />
      </AboutSection>
      <ButtonSection>
        <MainButtons />
      </ButtonSection>
    </div>
  );
}

export default About;
