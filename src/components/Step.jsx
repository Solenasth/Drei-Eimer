import React from "react";
import styled from "styled-components";
import ActionCard from "./ActionCard.jsx";
import ACTIONS from "../database/validActions.js";
import BucketCard from "./BucketsCard.jsx";
import ActionBuilder from "./ActionBuilder.jsx";

const ActionList = styled.div`
  display: flex;
`;
const CardsList = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
`;
const PosibleActions = styled.div`
  display: flex;
  align-items: center;
`;

function Step(props) {
  return (
    <CardsList>
      <ActionList>
        {props.action
          ? MakePredefinedAction(props)
          : MakeAllAvailableActions(
              props.CurrentState,
              props.SetCurrentState,
              props.SetSteps,
              props.SetFinished,
              props.Steps
            )}
      </ActionList>
      {props.Finished ? (
        <BucketCard state={props.state} />
      ) : (
        <BucketCard state={props.CurrentState} />
      )}
    </CardsList>
  );
}

function MakePredefinedAction(data) {
  const { action, state, payload } = data;
  return (
    <ActionCard
      action={action}
      payload={payload}
      state={state}
      isPreExisting={true}
    />
  );
}

function MakeAllAvailableActions(
  CurrentState,
  SetCurrentState,
  SetSteps,
  SetFinished,
  Steps
) {
  return (
    <PosibleActions>
      <ActionBuilder
        CurrentState={CurrentState}
        SetCurrentState={SetCurrentState}
        SetSteps={SetSteps}
        SetFinished={SetFinished}
        Steps={Steps}
      />
    </PosibleActions>
  );
}

export default Step;
