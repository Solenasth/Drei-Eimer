import React, { useState } from "react";
import styled from "styled-components";
import Step from "./Step.jsx";

const StepsList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function Solution(props) {
  const [Steps, SetSteps] = useState(props.data.steps);
  const [Finished, SetFinished] = useState(
    props.data.finished ? props.data.finished : false
  );
  const [CurrentState, SetCurrentState] = useState({ a: 0, b: 0, c: 0 });

  return (
    <StepsList>
      {Finished
        ? ExistingSolution(Steps, Finished)
        : NewSolution(
            Finished,
            SetFinished,
            SetSteps,
            Steps,
            CurrentState,
            SetCurrentState
          )}
    </StepsList>
  );
}

function ExistingSolution(data, Finished) {
  {
    return data.map(step => {
      return (
        <Step
          key={"step #" + step.id}
          action={step.action}
          payload={step.payload}
          state={step.state}
          Finished={Finished}
        />
      );
    });
  }
}

function NewSolution(
  Finished,
  SetFinished,
  SetSteps,
  Steps,
  CurrentState,
  SetCurrentState
) {
  return (
    <Step
      Finished={Finished}
      SetFinished={SetFinished}
      SetSteps={SetSteps}
      Steps={Steps}
      CurrentState={CurrentState}
      SetCurrentState={SetCurrentState}
    />
  );
}

export default Solution;
