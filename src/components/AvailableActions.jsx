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
  min-width: 5em;
`;

const RulesList = styled.ul``;

const Rule = styled.li`
  color: white;
  margin-bottom: 0.4em;
  font-weight: 500;
  text-align: justify;
  text-justify: inter-word;
`;

function AvailableActions() {
  return (
    <Section>
      <Title>Available Actions</Title>
      <RulesList>
        <Rule>Fill – you can fill a bucket.</Rule>
        <Rule>
          Transfer – you can transfer water from one bucket to the other. This
          can only transfer the amount that is empty in the target container.
          The remaining stays in the source container.
        </Rule>
        <Rule>Empty – you can empty the contents of a bucket.</Rule>
      </RulesList>
    </Section>
  );
}

export default AvailableActions;
