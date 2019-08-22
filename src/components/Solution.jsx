import React, { useState } from "react";
import styled from "styled-components";
import Step from "./Step.jsx";

const StepsList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function Solution(props) {
  const [Steps, SetSteps] = useState(props.steps);
  const [Finished, SetFinished] = useState(props.finished);
  return (
    <StepsList>{Finished ? ExistingSolution(Steps) : NewSolution()}</StepsList>
  );
}

function ExistingSolution(data) {
  {
    return data.map(step => {
      return (
        <Step
          key={"step #" + step.id}
          action={step.action}
          payload={step.payload}
          state={step.state}
        />
      );
    });
  }
}

function NewSolution() {
  return <Step />;
  //SHOULD CREATE A STEP WITH ALL AVAILABLE ACTIONS
  //EACH ACTION SHOULD HAVE A WAY TO MAKE A NEW STEP AND REGISTER TAKEN ACTION
}

export default Solution;
