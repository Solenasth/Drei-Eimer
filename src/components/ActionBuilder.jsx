import React, { useState } from "react";
import styled from "styled-components";
import ACTIONS from "../database/validActions";
import BucketsCapacity from "../database/buckets";
import Success from "../components/Success.jsx";

const ActionButton = styled.button`
  margin: 1em;
  padding: 1em;
  background-color: transparent;
  color: white;
  font-family: "Montserrat";
  font-size: 1.2em;
  border-radius: 3em;
  border-style: solid;
  border-color: transparent;
  background: #43cea2; /* fallback for old browsers */
  background-image: linear-gradient(
    to right,
    #eb3349 0%,
    #f45c43 51%,
    #eb3349 100%
  );
  box-shadow: 2px 1000px 1px white inset;
  color: black;
  background-size: 200% 200%;
  background-origin: border-box;
  &:hover {
    box-shadow: none;
    color: white;
  }
`;
const ActionBuilderCard = styled.div`
  background-color: white;
  width: auto;
  margin: 1em;
  padding: 1.5em;
  border-radius: 1em;
`;

const ActionForm = styled.form`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

const Select = styled.select`
  font-size: 1em;
  font-family: "montserrat";
  border-radius: 0.5em;
`;

const Title = styled.h1`
  text-align: center;
  padding-bottom: 0.5em;
  border-bottom: 0.01em solid;
`;
const Tag = styled.p`
  margin: 0.5em;
`;
const ErrorTag = styled.p`
  justify-content: center;
  font-size: 1.2em;
  margin: 0em;
  display: flex;
  color: red;
  font-weight: bolder;
  font-family: "Consolas";
  text-transform: capitalize;
`;

const Congratulate = styled(ErrorTag)`
  color: green;
`;

const Origin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const step = {
  action: ACTIONS.FILL,
  state: {
    a: 0,
    b: 0,
    c: 0
  },
  payload: {
    origin: "a",
    target: "a"
  }
};

function ActionBuilder(props) {
  const [RenderOrigin, SetRenderOrigin] = useState(false);
  const [Steps, SetSteps] = useState([]);
  const [ErrorMessage, SetErrorMessage] = useState("");

  return (
    <ActionBuilderCard>
      <Title>Make a new step</Title>
      {CreateForm(
        props,
        RenderOrigin,
        SetRenderOrigin,
        Steps,
        SetSteps,
        SetErrorMessage
      )}
      <ErrorTag>{ErrorMessage}</ErrorTag>
      {props.CurrentState.c === BucketsCapacity.c ? (
        <Congratulate>
          Congratulations! you finished the challange in {Steps.length} moves!
        </Congratulate>
      ) : null}
    </ActionBuilderCard>
  );
}

function CreateForm(
  props,
  RenderOrigin,
  SetRenderOrigin,
  Steps,
  SetSteps,
  SetErrorMessage
) {
  const { SetFinished, SetCurrentState, CurrentState } = props;
  //----------detect finish ------------//
  //SetFinished(CurrentState.c === BucketsCapacity.c ? true : false);

  //======== event handlers ======///
  //event handler for action select
  const selectAction = event => {
    {
      event.target.value === ACTIONS.TRANSFER
        ? SetRenderOrigin(true)
        : SetRenderOrigin(false);
    }
    step.action = event.target.value;
  };
  //event handler for target select
  const selectTarget = event => {
    step.payload.target = event.target.value;
  };
  //event handler for origin select
  const selectOrigin = event => {
    step.payload.origin = event.target.value;
  };
  //event handler for submit step
  const submit = event => {
    event.preventDefault();
    //basic error handling as demo, by no means comprehensive.
    //bucket is full
    if (
      step.action === ACTIONS.FILL &&
      step.state[step.payload.target] === BucketsCapacity[step.payload.target]
    ) {
      SetErrorMessage("Target bucket is full!");
      return;
    }
    //bucket is already empty
    if (
      step.action === ACTIONS.EMPTY &&
      step.state[step.payload.target] === 0
    ) {
      SetErrorMessage("Target bucket is already empty!!");
      return;
    }
    //tried to transfer to same bucket
    if (
      step.action === ACTIONS.TRANSFER &&
      step.payload.target === step.payload.origin
    ) {
      SetErrorMessage("Please select a target diferent from origin");
      return;
    }
    //tried to transfer an empty bucket
    if (
      step.action === ACTIONS.TRANSFER &&
      step.state[step.payload.origin] === 0
    ) {
      SetErrorMessage("cannot transfer from an empty bucket!");
      return;
    }
    //tried to transfer to full bucket
    if (
      step.action === ACTIONS.TRANSFER &&
      step.state[step.payload.target] === BucketsCapacity[step.payload.target]
    ) {
      SetErrorMessage("Target Bucket is already full!");
      return;
    }

    switch (step.action) {
      case ACTIONS.FILL:
        fillBucket();
        break;
      case ACTIONS.TRANSFER:
        transferBucket();
        break;
      case ACTIONS.EMPTY:
        emptyBucket();
        break;
    }
    SetErrorMessage("");
    let newState = Object.assign({}, step.state);
    SetCurrentState(newState);
    let newSteps = [...Steps, step];
    SetSteps(newSteps);
  };

  return (
    <ActionForm>
      <Tag>Action: </Tag>
      <Select name="Action" id="action" onChange={selectAction}>
        <option value={ACTIONS.FILL}> {ACTIONS.FILL}</option>
        <option value={ACTIONS.TRANSFER}> {ACTIONS.TRANSFER}</option>
        <option value={ACTIONS.EMPTY}> {ACTIONS.EMPTY}</option>
      </Select>
      {RenderOrigin ? (
        <Origin>
          <Tag>Origin: </Tag>
          <Select name="Origin" id="origin" onChange={selectOrigin}>
            <option value="a"> Bucket A</option>
            <option value="b"> Bucket B</option>
            <option value="c"> Bucket C</option>
          </Select>
        </Origin>
      ) : null}

      <Tag>Target: </Tag>
      <Select name="Target" id="target" onChange={selectTarget}>
        <option value="a"> Bucket A</option>
        <option value="b"> Bucket B</option>
        <option value="c"> Bucket C</option>
      </Select>
      <ActionButton onClick={submit}>Submit</ActionButton>
    </ActionForm>
  );
}

function fillBucket() {
  step.state[step.payload.target] = BucketsCapacity[step.payload.target];
}
function transferBucket() {
  if (
    step.state[step.payload.origin] + step.state[step.payload.target] >
    BucketsCapacity[step.payload.target]
  ) {
    step.state[step.payload.origin] -=
      BucketsCapacity[step.payload.target] - step.state[step.payload.target];
    step.state[step.payload.target] = BucketsCapacity[step.payload.target];
  } else {
    step.state[step.payload.target] += step.state[step.payload.origin];
    step.state[step.payload.origin] = 0;
  }
}
function emptyBucket() {
  step.state[step.payload.target] = 0;
}

export default ActionBuilder;
