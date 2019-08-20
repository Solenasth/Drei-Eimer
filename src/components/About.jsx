import React from "react";
import styled from "styled-components";
import AvailableActions from "./AvailableActions.jsx";

const AboutSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function About() {
  return (
    <AboutSection>
      <AvailableActions />
      <AvailableActions />
    </AboutSection>
  );
}

export default About;
