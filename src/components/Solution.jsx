import React, { useState } from "react";
import styled from "styled-components";
import { SOLUTION1, SOLUTION2 } from "../database/premade";
import Step from "./Step";

const StepsList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function Solution(props) {
  const [Steps, SetSteps] = useState(SOLUTION1.steps);
  const [Finished, SetFinished] = useState(SOLUTION1.finished);
  return (
    <StepsList>
      {Steps.map(step => {
        return (
          <Step
            key={"step #" + step.id}
            action={step.action}
            payload={step.payload}
            state={step.state}
          />
        );
      })}
    </StepsList>
  );
}

export default Solution;
