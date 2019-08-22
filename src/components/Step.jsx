import React from "react";
import styled from "styled-components";
import ActionCard from "./ActionCard.jsx";
import ACTIONS from "../database/validActions.js";

const ActionList = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
`;
const PosibleActions = styled(ActionList)``;

function Step(props) {
  return (
    <ActionList>
      {props.action
        ? MakePredefinedAction(props)
        : props.state
        ? MakeAllAvailableActions(props.state)
        : MakeAllAvailableActions({ a: 0, b: 0, c: 0 })}
    </ActionList>
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

function MakeAllAvailableActions(currentState) {
  return (
    <PosibleActions>
      <ActionCard action={ACTIONS.FILL} />
      <ActionCard action={ACTIONS.TRANSFER} />
      <ActionCard action={ACTIONS.EMPTY} />
    </PosibleActions>
  );
}

export default Step;
